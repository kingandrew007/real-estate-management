import mongoose from "mongoose";

const signUpSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emailid: {
    type: String,
    unique:true,
    required: true,

    
  },
  current_password: {
    type: String,
    required: true,
    // Password validation using regex
    match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'Password must be at least 6 characters long and contain at least one digit, one lowercase letter, and one uppercase letter']
  },
  mobile: {
    type: Number,
    required: true
  }
});

const signUpModel = mongoose.model("signUpDetails", signUpSchema);

export default signUpModel;
