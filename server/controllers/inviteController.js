import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});
// import emailjs from 'emailjs-com';
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { EMAIL_USER, EMAIL_PASS } = process.env;
// const { EMAIL_FROM, SITE_NAME, CLIENT_URL } = process.env;

// Invite sms to phone
// export const inviteSMS2 = async (req) => {
//   // console.log(req.body);
//   const { phone, provider, subject, message, to } = req.body;
//   const mailOptions = {
//     // from: `${SITE_NAME} <${phone}>`,
//     from: `${SITE_NAME} <${EMAIL_FROM}>`,
//     // to: `${phone}@${provider}.com`,
//     // to: 'arif.swfu@outlook.com',
//     to: to,
//     subject: subject,
//     text: message,
//     // html: `<img src='${base64}'/>`,
//     // attachments: [
//     //   {
//     //     content: base64.replace('data:image/png;base64,', ''),
//     //     filename: 'attachment.png',
//     //     type: 'image/png',
//     //     disposition: 'attachment',
//     //   },
//     // ],
//   };

//   // console.log(mailOptions);

//   // const result = await transport.sendMail(mailOptions);
//   // const result = await sgMail.send(mailOptions);
//   // console.log("result", result);

//   // if (!result) {
//   //     throw new Error('Something went wrong');
//   // }

//   try {
//     const result = await sgMail.send(mailOptions);
//     console.log("result", result);
//     if (!result) {
//       throw new Error("Something went wrong");
//     }
//   } catch (error) {
//     throw new Error(error);
//   }

//   // const serviceID = 'service_beweddy';
//   // const templateID = 'template_93mcnzh';
//   // // const templateParams = {
//   // //     name: req.body.name,
//   // //     phone: req.body.phone,
//   // //     email: req.body.email,
//   // //     message: req.body.message
//   // // };
//   // const templateParams = {
//   //     name: 'Arif',
//   //     email: 'arif.swfu@outlook.com',
//   //     message: 'Check this out!'
//   // };
//   // const userId = 'user_y3r1bXNWhKhlyCF7ne1fK';

//   // console.log(serviceID, templateID, templateParams, userId)

//   // emailjs.send(serviceID, templateID, templateParams, userId)
//   // .then(function(response) {

//   //     console.log('SUCCESS!', response.status, response.text);
//   //     // res.status(200).json({
//   //     //     success: true,
//   //     //     data: "SMS sent successfully"
//   //     // });
//   //  }, function(error) {
//   // console.log('invite sms failed')

//   //     console.log('FAILED...', error);
//   //  });
// };

// const test = (base64) => {
//   const smtpTransport = nodemailer.createTransport(
//     smtpTransport({
//       host: "smtp.gmail.com",
//       secureConnection: false,
//       port: 587,
//       auth: {
//         user: E, // your actual email
//         pass: EMAIL_PASS, // your actual password
//       },
//     })
//   );

//   // send email without attachment
//   var mailOptionsNoAttachment = {
//     from: E,
//     to: "arif.swfu@outlook.com",
//     bcc: "devarif.me@gmail.com", // bcc is optional.
//     subject: "email without attachment",
//     text: "This is the body part",
//   };

//   try {
//       smtpTransport.sendMail(mailOptionsNoAttachment, function (error, response) {
//         if (error) {
//           //console.log(error);
//           res.end("error");
//         } else {
//           //console.log("Message sent: " + response.message);
//           res.end("sent");
//         }
//       });
//   } catch (error) {
//       console.log(error);
//   }
// };

export const inviteSMS = asyncHandler(async (req, res) => {
  const { phone, to, provider, subject, message } = req.body;
  const mail = `${phone}@${provider}.com`;

  const mailOptions = {
    // to: to,
    to: mail,
    subject: subject,
    text: message,
  };

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      res.status(200).json({ message: "Error", error: error.message });
      // res.end("error");
    } else {
      res
        .status(200)
        .json({ message: "Invite sent", response: response.message });
    }
  });
});

// Invite mms to phone
export const inviteMMS = asyncHandler(async (req, res) => {
  const { phone, to, provider, subject, message } = req.body;
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "emailImg",
  });

  // const { public_id, height, width, secure_url, url } = result;

  if (result) {
    fs.unlink(file.tempFilePath, (err) => {
      console.log(err);
    });

    const mailOptions = {
      // to: to,
      // to: `${phone}@${provider}.com`,
      to: `${phone}@${provider}.com, ${to}`,
      subject: `${subject} <${phone}>`,
      text: message,
      html: `<div style="text-align: center;"><img src="${result.url}" height="100px" width="100px"/></div><br /><p>${message}</p>`,
      attachment: [
        {
          filename: "attachment.png",
          content: result.url.replace("data:image/png;base64,", ""),
          type: "image/png",
          disposition: "attachment",
        },
      ],
    };

    console.log(mailOptions);

    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        res.status(200).json({ message: "Error", error: error.message });
        // res.end("error");
      } else {
        res
          .status(200)
          .json({ message: "Invite sent", response: response.message });
      }
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});
