import { supabase } from "@/lib/supabase";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, mobile, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, mobile, message }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError.message);
      return Response.json({ error: "Failed to save your message." }, { status: 500 });
    }

    // Send emails — non-fatal: log errors but don't fail the response
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await transporter.sendMail({
          from: `"Samiteon Website" <${process.env.SMTP_USER}>`,
          to: adminEmail,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:8px;">
              <h2 style="color:#1e40af;margin-bottom:16px;">New Contact Form Submission</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#64748b;width:100px;font-weight:bold;">Name</td><td style="padding:8px 0;color:#1e293b;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Email</td><td style="padding:8px 0;color:#1e293b;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-weight:bold;">Mobile</td><td style="padding:8px 0;color:#1e293b;">${mobile || "—"}</td></tr>
                <tr><td style="padding:8px 4px 8px 0;color:#64748b;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px 0;color:#1e293b;white-space:pre-wrap;">${message}</td></tr>
              </table>
            </div>
          `,
        });

        await transporter.sendMail({
          from: `"Samiteon" <${process.env.SMTP_USER}>`,
          to: email,
          subject: "We received your message — Samiteon",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:8px;">
              <h2 style="color:#1e40af;margin-bottom:8px;">Thank you, ${name}!</h2>
              <p style="color:#475569;">We have received your message and will get back to you within <strong>24 hours</strong>.</p>
              <div style="background:#f8fafc;border-left:4px solid #3b82f6;padding:16px;margin:16px 0;border-radius:4px;">
                <p style="margin:0;color:#64748b;font-style:italic;">"${message}"</p>
              </div>
              <p style="color:#475569;">If you need immediate assistance, please call us at <strong>+1 502-644-9399</strong> (USA) or <strong>+91 99167 14441</strong> (India).</p>
              <p style="color:#94a3b8;font-size:13px;margin-top:24px;">— The Samiteon Team</p>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("Email send error:", mailErr instanceof Error ? mailErr.message : mailErr);
      }
    } else {
      console.warn("Email skipped: SMTP_USER, SMTP_PASS, or ADMIN_EMAIL not configured.");
    }

    return Response.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Contact API error:", msg);
    return Response.json({ error: msg }, { status: 500 });
  }
}
