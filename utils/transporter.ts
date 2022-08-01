import nodemailer from "nodemailer";
import { transporter_secret } from "./transporter-secret";

const transporter = nodemailer.createTransport(transporter_secret);

export { transporter };
