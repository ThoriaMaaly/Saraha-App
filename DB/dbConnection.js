import mongoose from "mongoose";
export const db=async()=>{

   
   await mongoose.connect('mongodb+srv://thoria:thoria111999@cluster0.ksjb2.mongodb.net/SarahaDB')
}
