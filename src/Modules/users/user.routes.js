import { Router } from "express";
import { validate } from "../../../utilities/validation.js";
import { signIn, signUp } from "./user.controllers.js";
import { userValidation } from "./user.validation.js";
import { checkEmail } from "../../middleware/CheckEmailExist.js";
export const userRoutes=Router();
userRoutes.use(validate(userValidation));
userRoutes.post("/signup",checkEmail,signUp);
userRoutes.post("/signin",signIn);