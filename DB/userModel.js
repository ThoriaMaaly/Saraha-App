import { Schema,model } from "mongoose";
const userSchema=new Schema({
    userName:String,
    email:String,
    password:String,
    OTP:String
   
});
export const User= model('User',userSchema);
