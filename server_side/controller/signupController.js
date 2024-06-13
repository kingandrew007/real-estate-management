import signUpModel from "../models/signUpData.js";
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

const postSignUp = async (req, res) => {
  const { name, emailid, current_password, mobile } = req.body;

  // Check if any field is empty
  if (!name || !emailid || !current_password || !mobile) {
    return res.status(400).json({ error: "All fields are mandatory. Please fill out all fields." });
  }

  const encryptedPassword = await bcrypt.hash(current_password, 13);

  try {
    const oldUser = await signUpModel.findOne({ emailid });
    if (oldUser) {
      return res.status(400).json({ error: "User Exists" });
    }

    try {
      await signUpModel.create({ ...req.body, current_password: encryptedPassword });

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'romanreignsjohncena@gmail.com',
          pass: 'idzr nbgh osts eqwu'
        }
      });

      const mailOptions = {
        from: 'romanreignsjohncena@gmail.com',
        to: emailid,
        subject: 'Thanks for Registering!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #4CAF50;">Welcome to Our Platform!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for registering on our platform. We are thrilled to have you on board.</p>
            <p>You can now list and buy properties, explore various options, and have a wonderful time with our services.</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <h3 style="color: #333;">What's Next?</h3>
            <ul>
              <li>Explore properties available for purchase</li>
              <li>List your properties for sale</li>
              <li>Enjoy the seamless experience our platform offers</li>
            </ul>
            <p>We are here to assist you with anything you need. Feel free to reach out to our support team if you have any questions.</p>
            <p>Best Regards,<br>The Team <br> <h4>Contact: </h4>romanreignsjohncena@gmail.com </p>
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

      return res.status(201).json({ msg: "Signed up successfully!" });
    } catch (err) {
      return res.status(500).json({ error: "Failed to sign up. Please try again later." });
    }
  } catch (err) {
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }
}

export default postSignUp;
