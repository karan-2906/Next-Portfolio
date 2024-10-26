import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { recipitentmail, permail } from "./Emailtemplate";

const sendEmail = async (recipitentname, recipientEmail, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

        const reci = recipitentmail(recipitentname);

        const recimail = {
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Contact with Karan Gandhi',
            html: reci,
        }

        await transporter.sendMail(recimail)
        console.log("Email has been send to " + recipientEmail)


        const per = permail(recipitentname, recipientEmail, message);

        const mymail = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Contact to ' + recipitentname ,
            html: per,
        }

        await transporter.sendMail(mymail)
        console.log("Email has been send to " + process.env.EMAIL)

    } catch (error) {
        console.log(error)
    }
}

export default { sendEmail }