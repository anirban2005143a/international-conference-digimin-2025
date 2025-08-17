import nodemailer from "nodemailer";

export const sendMail = async (mail, data) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.SENDING_MAIL,
      pass: process.env.SENDING_MAIL_PASSKEY,
    },
  });

  const {
    fullName,
    email,
    phone,
    affiliation,
    authorName,
    abstractTitle,
    abstractSubmitted,
    registrationCategory,
    paymentId,
    paymentDate,
  } = data;

  // Optional fields
  const authorNameText = authorName ? `<li><strong>Author Name:</strong> ${authorName}</li>` : "";
  const abstractTitleText = abstractTitle ? `<li><strong>Abstract Title:</strong> ${abstractTitle}</li>` : "";

  const receiver = {
    from: process.env.SENDING_MAIL,
    to: mail, // array of recipient emails
    subject: `DIGMIN New Registration`,
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Affiliation: ${affiliation}
      ${authorName ? `Author Name: ${authorName}` : ""}
      Abstract Submitted: ${abstractSubmitted}
      ${abstractTitle ? `Abstract Title: ${abstractTitle}` : ""}
      Registration Category: ${registrationCategory}
      Payment ID: ${paymentId}
      Payment Date: ${paymentDate}
    `,
    html: `
      <h2>New Registration Details</h2>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Affiliation:</strong> ${affiliation}</li>
        ${authorNameText}
        <li><strong>Abstract Submitted:</strong> ${abstractSubmitted}</li>
        ${abstractTitleText}
        <li><strong>Registration Category:</strong> ${registrationCategory}</li>
        <li><strong>Payment ID:</strong> ${paymentId}</li>
        <li><strong>Payment Date:</strong> ${paymentDate.split("-").reverse().join("-")}</li>
      </ul>
    `,
  };

  try {
    const info = await auth.sendMail(receiver);
    console.log("Email sent:", info.messageId);
    return "success!";
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
};
