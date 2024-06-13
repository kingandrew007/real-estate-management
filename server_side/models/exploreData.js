import mongoose from "mongoose";

const expData = mongoose.Schema({
  name: {
    type:String,
    required:true 
  } ,
  price: String,
  type: String,
  place: String,
  image: String
});


const expModel = mongoose.model("propertydetails",expData);

export default expModel;