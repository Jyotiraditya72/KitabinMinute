import mongoose from 'mongoose'

const connectDb=async()=>{
try{
const connectioInstance = await mongoose.connect
(`${process.env.mongodb_uri}`)
console.log(`\n mongodb connected !!!
  ${connectioInstance.connection.host}`);
}catch(error){
console.log("mongodb connection failed !!!",error);
process.exit(1);

}

}
export default connectDb;