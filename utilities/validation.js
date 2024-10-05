import { AppError } from "./AppClassError.js";



export const validate=(schema)=>{
return (req,res,next)=>{
const {error}= schema.validate(req.body,{abortEarly:false});
if(error?.details){
    const validationErrorMessages=[];
    error.details.forEach(element => {
        validationErrorMessages.push(element.message);
        validationErrorMessages.join(',')
        
    });
    next(new AppError(validationErrorMessages,401))
}else{
    next()
}

}

}