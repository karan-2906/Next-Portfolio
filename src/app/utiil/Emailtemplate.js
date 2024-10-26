const recipitentmail = (name) => {
    return `
        <div>
            <h1>Hi ${name}, I am Karan Gandhi</h1>
            <h2>Thank you for contacting me</h2>
            <h3>I will contact you as soon as possible</h3>
            <h3>Have a look at my Works on <a href="https://github.com/karan-2906" target="_blank" style="color: FF56F6">Github</a> <br /> Also Visit my <a href="https://portfolio-karan-gandhi.vercel.app/" style="color: FF56F6">portfolio</a> </h3>
            <h3>You and reply to this mail to initiate a talk on topic you mentioned</h3>
            <br />
            <h4>Regards</h4>
            <h4>Thank you</h4>
            <h4>Karan Gandhi</h4>
        </div>
    `
};

const permail = (name, email, message) => {
    return `
        <div>
            <h1>Hi Karan, ${name} has contacted you</h1>
            <h2>with the ${email} and his message was "${message}"</h2>
            <h3>contact him as soon as possible</h3>
            <br />
            <h4>Regards</h4>
            <h4>Thank you</h4>
            <h4>Karan Gandhi</h4>
        </div>
    `
};

module.exports =
{
    recipitentmail,
    permail
}