import nodemailer from 'nodemailer';
const postContact = async (req, res) => {
  const { contactName,contactEmail,contactMessage,contactPhone } = req.body;

  // Check if any field is empty
  if (!contactName || !contactEmail || !contactPhone || !contactMessage) {
    return res.status(400).send({ msg: "All fields are mandatory" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'romanreignsjohncena@gmail.com',
        pass: 'idzr nbgh osts eqwu'
      }
    });

    const mailOptions = {
      from: contactEmail ,
      to:  'romanreignsjohncena@gmail.com',
      subject: 'Customer message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #4CAF50;">Customer Message</h2>
          <p>I'm ${contactName},</p>
          <h1>Message:</h1>
          <p>${contactMessage}</p>
          <p>contact ${contactPhone},</p>
          <p>contact ${contactEmail},</p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
  } catch (err) {
    res.status(500).send({ msg: "message not sent" });
  }
};

export default postContact;