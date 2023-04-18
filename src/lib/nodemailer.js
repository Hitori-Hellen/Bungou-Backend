import nodemailer from "nodemailer";

// Cấu hình transport cho nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "khai170102@gmail.com", // Email của bạn
    pass: "khai141296", // Mật khẩu của bạn
  },
});

export const sendResetTokenEmail = async (to, resetToken) => {
  try {
    // Tạo nội dung email
    const mailOptions = {
      from: "khai170102@gmail.com", // Email của bạn
      to: to, // Email của người dùng
      subject: "Reset Password",
      html: `<p>Bạn đã yêu cầu reset mật khẩu. Đây là mã resetToken của bạn: <strong>${resetToken}</strong></p>`,
    };

    // Gửi email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
