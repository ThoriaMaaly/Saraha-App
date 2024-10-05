import Joi from 'joi';


 
export const messageValidation = Joi.object({
content:Joi.string().min(3).max(300).required(),
recieverid:Joi.string().hex().length(24)

})