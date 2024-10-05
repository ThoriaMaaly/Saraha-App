
import nodemailer from "nodemailer"
export const sendMsg=async(userEmail,userPassword,reciverEmail,msg)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: userEmail,
          pass: userPassword,
        },
      });
     



  // async..await is not allowed in global scope, must use a wrapper
  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Maddison Foo Koch 👻" ${userEmail}`, // sender address
      to: reciverEmail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: msg, // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  
  
  main().catch(console.error);
};


  