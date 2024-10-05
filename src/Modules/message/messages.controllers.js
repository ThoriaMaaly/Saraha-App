import { Message } from "../../../DB/messageModel.js";
import { AppError } from "../../../utilities/AppClassError.js";
import { catchError } from "../../middleware/CatchError.js";
import { User } from "../../../DB/userModel.js"
import { sendMsg } from "../../../utilities/Send Messages.js";

const addMessage = catchError(async (req, res, next) => {
    const { recieverid } = req.body;
    const user = await User.findById(recieverid);
    if(user){

        //veifying token middleware add user who add the msg to the body
        //reciverid give me info about reciver(email)
        sendMsg(  req.body.user.email, req.body.user.password, user.email,  req.body.content)

    }
    const msg = await Message.create(req.body);
    if (msg) {
        res.status(201).json({ message: "msg added succefully...", msg })
    } else {
        next(new AppError("failed to send msg..", 400))
    }
});

const getAllUserMessages = catchError(async (req, res, next) => {
    const allMsgsOfUser = await Message.find({ recieverid: req.body.user.userid });
    if (allMsgsOfUser.length == 0) {
        res.status(200).json({ message: "no msgd founded.." })
    } else {
        res.status(200).json({ allMsgsOfUser })

    }
});
const deleteMessage = catchError(async (req, res, next) => {
    const { id } = req.params;
    const msg = await Message.findByIdAndDelete(id);
    if (msg) {
        res.status(201).json({ message: "msg deleted succefully...", msg })
    } else {
        next(new AppError("msg not founded..", 404))
    }



})
export { addMessage, deleteMessage, getAllUserMessages }