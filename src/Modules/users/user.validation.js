import Joi from 'joi';
 
export const userValidation = Joi.object({
userName:Joi.string().min(3).max(20).required(),
email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
password:Joi.string().min(6).max(12),
OTP:Joi.string().min(6).max(12),


})