import signUpModel from "../models/signUpData.js";
import bcrypt from 'bcryptjs';

const Login = async (req, res) => {
  const { emailid, current_password } = req.body;
  try {
    let user = await signUpModel.findOne({ emailid }); 
    if (!user) {
      res.json({ msg: "please_signup" });
    } else {
      const valid = await bcrypt.compare(current_password, user.current_password);
      user = user._id.toString(); 
      console.log(user);
      if (!valid) {
        res.json({ msgHere: "password_incorrect" });
      } else {
        res.json({ msgHere: "Login Successful" });
        return true;
      }
    }
  } catch (err) {
    res.json({ msg: "error" });
    console.log(err);
  }
};
export default Login;
