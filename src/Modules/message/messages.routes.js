import { Router } from "express";
import { messageValidation } from "./messages.validation.js";
import { validate } from "../../../utilities/validation.js";
import { verifingToken } from "../../middleware/VerifyToken.js";
import { addMessage, deleteMessage, getAllUserMessages } from "./messages.controllers.js";
export const messageRoutes=Router();

messageRoutes.post('/',validate(messageValidation),verifingToken,addMessage);
messageRoutes.delete('/:id',deleteMessage);
messageRoutes.get('/',verifingToken,getAllUserMessages)