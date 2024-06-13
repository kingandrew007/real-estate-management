import express from 'express';
import cors from 'cors';
import dbconnection from './config/db.js';
import expModel from './models/exploreData.js';
import expRoute from './routes/exploreRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
// app.use('/explore',)
// app.get('/explores',(req,res)=>{
//   expModel.find().then(expdata => res.json(expdata)).catch(err=> res.json(err));
// })


app.use(expRoute);
app.get('/explores',(req,res)=>{
  expModel.find()
  .then(users =>  res.send(users))
  .catch(err => res.send(err))  
})


dbconnection();

app.listen(8000,()=>{
  console.log("running on port number 8000......");
})