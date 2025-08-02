import { envConfig } from "@/lib/env";
import nodemailer, { TransportOptions } from "nodemailer";
import z from "zod";

const transporter = nodemailer.createTransport({
  service: envConfig.SMTP_SERVICE,
  auth: {
    user: envConfig.SMTP_USER,
    pass: envConfig.SMTP_PASS,
  },
  secure: envConfig.SMTP_SECURE,
} as TransportOptions);

const mailFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export async function POST(request: Request) {
  const { name, email, subject, message } = mailFormSchema.parse(await request.json());

  try {
    const info = await transporter.sendMail({
      from: `"${name}" - "${email}" | <${envConfig.SMTP_USER}>`,
      to: envConfig.SMTP_USER,
      subject: subject,
      text: message,
      html: `<b>${name} - ${email}</b><br><br>${message}`,
    });

    return Response.json({ info }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
