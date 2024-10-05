import { AppError } from "../../utilities/AppClassError.js"

 export const catchError=(fn)=>{
return (req,res,next)=>{
    fn(req,res,next).catch((err)=>{
        next(new AppError(err,404))
    })
}
 }