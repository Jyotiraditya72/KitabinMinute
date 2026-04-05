import dotenv from "dotenv"
import connectDb from "./config/database.js"
import app from "./app.js"
dotenv.config({
   path: './.env'
   });
   
   const startServer=async()=>{
   try{
   await connectDb();
   
   app.on("error",(error)=>{
   console.log("error",error);
   throw error;
   });
   app.listen(process.env.port || 7000,()=>{
   console.log(`server is running on port:
   ${process.env.port}`);
   });
   }
   catch(error){
   console.log("mongodb connection failed!!!",err)
   
   }
   }
   startServer();