import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, service, message } = await req.json();

        if (!name || !email || !service || !message) {
            return Response.json({ error: 'Missing fields' }, { status: 400 });
        }

        await resend.emails.send({
            from: 'SL Studio <onboarding@resend.dev>',
            to: 'serhii@slstudio.pro',
            replyTo: email,
            subject: `New inquiry from ${name} — ${service}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #C9A84C; border-bottom: 1px solid #C9A84C; padding-bottom: 8px;">
                        New message from slstudio.pro
                    </h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>About the project:</strong></p>
                    <p style="background: #f5f5f5; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
                    <p style="color: #999; font-size: 12px;">Sent from slstudio.pro contact form</p>
                </div>
            `,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error('Email send error:', error);
        return Response.json({ error: 'Failed to send' }, { status: 500 });
    }
}
