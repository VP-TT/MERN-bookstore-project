// import express, { request } from "express";
// import {PORT, mongodbURL} from './config.js';
// import mongoose from 'mongoose';
// // import { Book } from "./models/bookModel.js";
// import router from './routes/bookRoute.js';
// import cors from 'cors';

// const app = express();

// // middleware for parsing request body
// app.use(express.json());

// // middleware for handling cors policy
// // option 1: allow all origins with default of cors(*)
// app.use(cors());
// // option 2: allow custom origins
// // app.use(
// //   cors({
// //     origin:'http://localhost:3000',
// //     methods:['GET','POST','PUT','DELETE'],
// //     allowedHeaders:['Content-Type']
// //   })
// // );

// app.get('/',(request, response)=>{
//   console.log(request);
//   return response.status(234).send('Welcome to MERN Stack Tutorial');
// });

// app.use('/books', router);

// mongoose
// .connect(mongodbURL)
// .then(()=>{
// console.log('App connected to database');
// app.listen(PORT, ()=>{
//   console.log(`App is listening on port: ${PORT} `)
// });
// })
// .catch((error)=>{
// console.log(error.message);
// });
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const mongodbURL = process.env.mongodbURL;

import express, { request } from "express";
// import {PORT, mongodbURL} from './config.js';
import mongoose from 'mongoose';
// import { Book } from "./models/bookModel.js";
import router from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for handling cors policy
// option 1: allow all origins with default of cors(*)
app.use(cors());
// option 2: allow custom origins
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
//   })
// );

app.get('/',(request, response)=>{
  console.log(request);
  return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', router);

mongoose
.connect(mongodbURL)
.then(()=>{
console.log('App connected to database');
app.listen(PORT, ()=>{
  console.log(`App is listening on port: ${PORT} `)
});
})
.catch((error)=>{
console.log(error.message);
});