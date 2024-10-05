import { User } from "../../DB/userModel.js"
import bcrypt from "bcrypt"
import { AppError } from "../../utilities/AppClassError.js";
export const checkEmail=async(req,res,next)=>{
    const user= await User.findOne({email:req.body.email})
    if(!user){
        req.body.password= bcrypt.hashSync(req.body.password,8);
        next();
    }else{
        next(new AppError("email already exist..",409))
    }
}