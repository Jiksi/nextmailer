import nodemailer from "nodemailer";

type Mail = {
  to: string;
  name: string;
  subject: string;
  body: string;
};

export async function sendMail({ to, name, subject, body }: Mail) {
  const { MAIL_HOST, MAIL_USER, MAIL_PASS } = process.env;

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  try {
    const catchResult = await transporter.verify();
    console.log(catchResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: `"${name}" <${MAIL_USER}>`,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
