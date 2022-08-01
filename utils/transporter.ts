import nodemailer from "nodemailer";
// import { transporter_secret } from "./transporter-secret";

const transporter = nodemailer.createTransport({
    host: "smtp.eu.mailgun.org",
    port: 587,
    auth: {
      user: "postmaster@fizkult.moscow.sport",
      pass: "85e00fd5da478ad2fd645efc63ab3e16-53ce4923-3828605c",
    },
    tls: {
      rejectUnauthorized: false,
    },
});

export { transporter };
