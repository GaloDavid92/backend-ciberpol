import nodemailer from 'nodemailer'
import emailConfig from '../config.js'

const enviarMail = (to, subject, body) => {
    var message = {
        from: emailConfig.user,
        to,
        subject,
        text: "",
        html: body
    };

    var transporter = nodemailer.createTransport({
        service: emailConfig.service,
        auth: {
            user: emailConfig.user,
            pass: emailConfig.pass
        }
    })

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.error("Error enviando email")
            console.error(error.message)
        } else {
            console.log("Email enviado")
        }
    })
}

export default enviarMail