import { Schema, Types, model } from "mongoose";
const messageSchema = new Schema({
    content: String,
    recieverid:
    {
        type: Types.ObjectId,
        ref: "User"
    }
});
export const Message = model('Message', messageSchema);
