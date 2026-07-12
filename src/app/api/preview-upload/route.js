import { handleUploadPresigned } from "@vercel/blob/client";
import { issueSignedToken } from "@vercel/blob";

// Maximum file size accepted for a free preview upload.
// OWNER: change this number to raise/lower the limit (keep it in sync with the
// copy shown in the form and with the free-track-preview page checklist).
const MAX_UPLOAD_BYTES = 100 * 1024 * 1024; // 100 MB

// Audio + archive types allowed into the private store. Anything else is
// rejected by the presigned PUT URL itself, not just by the client.
const ALLOWED_CONTENT_TYPES = [
    "audio/wav",
    "audio/x-wav",
    "audio/mpeg",
    "audio/mp4",
    "audio/aiff",
    "audio/x-aiff",
    "audio/flac",
    "audio/x-flac",
    "audio/ogg",
    "audio/webm",
    "video/mp4",
    "application/zip",
    "application/x-zip-compressed",
    "application/octet-stream",
];

// Only paths under this prefix may be written, and only with a safe charset.
// The client builds `previews/<timestamp>-<sanitized-name>`; we re-validate
// here so a crafted request can't scope a token to an arbitrary pathname.
const PATHNAME_RE = /^previews\/[A-Za-z0-9._-]+$/;

export async function POST(req) {
    // Blob signed-token issuance runs over OIDC (VERCEL_OIDC_TOKEN + BLOB_STORE_ID).
    // Fail loudly with a clear message instead of a cryptic SDK error.
    if (!process.env.BLOB_STORE_ID || !process.env.VERCEL_OIDC_TOKEN) {
        console.error(
            "[preview-upload] Missing BLOB_STORE_ID or VERCEL_OIDC_TOKEN. " +
                "Run `vercel env pull .env.local` (owner does this manually) — the OIDC token expires ~12h."
        );
        return Response.json(
            { error: "Upload is temporarily unavailable. Please paste a link instead, or contact me on Telegram." },
            { status: 503 }
        );
    }

    try {
        const body = await req.json();

        const result = await handleUploadPresigned({
            body,
            request: req,
            // webhookPublicKey defaults to process.env.BLOB_WEBHOOK_PUBLIC_KEY
            getSignedToken: async (pathname) => {
                if (!PATHNAME_RE.test(pathname)) {
                    throw new Error(`Rejected pathname: ${pathname}`);
                }

                // Upload-completion window: generous enough for a 100 MB
                // multipart upload over a slow/interrupted connection, and wide
                // enough to absorb clock skew between a local dev machine and the
                // Blob API (the API rejects a validUntil it considers not in the
                // future). The token is still tightly scoped: this exact pathname,
                // put-only, private store, size + content-type capped.
                const validUntil = Date.now() + 3 * 60 * 60 * 1000;
                const token = await issueSignedToken({
                    pathname,
                    operations: ["put"],
                    allowedContentTypes: ALLOWED_CONTENT_TYPES,
                    maximumSizeInBytes: MAX_UPLOAD_BYTES,
                    validUntil,
                });

                return {
                    token,
                    urlOptions: {
                        // validUntil must be repeated here: handleUploadPresigned
                        // builds the presigned PUT URL from urlOptions, and the
                        // presign step rejects a missing/undefined validUntil
                        // ("validUntil must be in the future").
                        validUntil,
                        allowedContentTypes: ALLOWED_CONTENT_TYPES,
                        maximumSizeInBytes: MAX_UPLOAD_BYTES,
                        addRandomSuffix: false, // pathname already carries a timestamp
                    },
                };
            },
            // Fires via webhook on deploy only — never on localhost — so nothing
            // important is built on it. The email is sent from /api/preview instead.
            onUploadCompleted: async ({ blob }) => {
                console.log("[preview-upload] upload completed (webhook):", blob?.pathname);
            },
        });

        return Response.json(result);
    } catch (error) {
        console.error("[preview-upload] error:", error);
        return Response.json({ error: "Upload authorization failed." }, { status: 500 });
    }
}
