import { Resend } from "resend";
import { issueSignedToken, presignUrl } from "@vercel/blob";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

const escapeHtml = (str) =>
    String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

const formatBytes = (bytes) => {
    const n = Number(bytes);
    if (!n || Number.isNaN(n)) return "unknown size";
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
    return `${(n / (1024 * 1024)).toFixed(1)} MB`;
};

export async function POST(req) {
    try {
        const {
            name,
            email,
            service,
            message,
            pathname,
            fileName,
            fileSize,
            link,
            website,
        } = await req.json();

        // Honeypot: real users never fill this hidden field — pretend success for bots.
        if (website) {
            return Response.json({ ok: true });
        }

        // Email is required; the visitor must provide EITHER an uploaded file
        // (pathname) OR an external link.
        if (!email) {
            return Response.json({ error: "Email is required" }, { status: 400 });
        }
        if (!pathname && !link) {
            return Response.json({ error: "Attach a file or paste a link" }, { status: 400 });
        }

        // Build a 7-day signed GET link for the uploaded private file.
        let downloadUrl = null;
        if (pathname) {
            try {
                const validUntil = Date.now() + SEVEN_DAYS_MS;
                const signed = await issueSignedToken({
                    pathname,
                    operations: ["get"],
                    validUntil,
                });
                const { presignedUrl } = await presignUrl(signed, {
                    operation: "get",
                    pathname,
                    access: "private",
                    validUntil,
                });
                downloadUrl = presignedUrl;
            } catch (err) {
                console.error("[preview] failed to presign download URL:", err);
                // Non-fatal: still email the request; owner can grab the file
                // from the Vercel dashboard using the pathname below.
            }
        }

        const safe = {
            name: escapeHtml(name) || "—",
            email: escapeHtml(email),
            service: escapeHtml(service) || "—",
            message: escapeHtml(message) || "—",
            fileName: escapeHtml(fileName) || "—",
            pathname: escapeHtml(pathname) || "—",
            link: escapeHtml(link),
        };

        const fileBlock = pathname
            ? `
                <p><strong>File:</strong> ${safe.fileName} (${escapeHtml(formatBytes(fileSize))})</p>
                <p><strong>Stored at:</strong> ${safe.pathname}</p>
                ${
                    downloadUrl
                        ? `<p><a href="${downloadUrl}" style="display:inline-block;background:#C9A84C;color:#161616;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:600;">⬇ Download the track</a></p>
                           <p style="color:#999;font-size:12px;">This link works for 7 days. After that, download it from the Vercel dashboard (Storage → Blob → Browser).</p>`
                        : `<p style="color:#b45309;">Signed download link could not be generated — grab the file from the Vercel dashboard (Storage → Blob → Browser) using the path above.</p>`
                }`
            : `<p><strong>External link:</strong> <a href="${safe.link}">${safe.link}</a></p>`;

        // RESEND_API_KEY is absent on localhost — degrade gracefully instead of
        // crashing, so the whole flow (upload + signing) can still be tested.
        if (!process.env.RESEND_API_KEY) {
            console.error(
                "[preview] RESEND_API_KEY missing — email NOT sent (expected on localhost)."
            );
            console.error("[preview] request from:", safe.email, "| download link:", downloadUrl || "(none)");
            return Response.json({ ok: true, emailSkipped: true });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: "SL Studio <noreply@slstudio.pro>",
            to: "serhii@slstudio.pro",
            replyTo: email,
            subject: `Free preview request — ${name || email}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #C9A84C; border-bottom: 1px solid #C9A84C; padding-bottom: 8px;">
                        New free preview request
                    </h2>
                    <p><strong>Name:</strong> ${safe.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
                    <p><strong>Service:</strong> ${safe.service}</p>
                    <p><strong>Notes:</strong></p>
                    <p style="background: #f5f5f5; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${safe.message}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
                    ${fileBlock}
                    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
                    <p style="color: #999; font-size: 12px;">Sent from the Free Track Preview form on slstudio.pro</p>
                </div>
            `,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error("[preview] error:", error);
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}
