import mongoose from "mongoose";
function dbconnection(){
  mongoose.connect("mongodb://localhost:27017/DbForProject").then(res=> console.log("db connected")).catch(err => console.log("db not connected"));

}


export default dbconnection;