process.on('uncaughtException',(err)=>{
    console.log(err)}
);
process.on("unhandledRejection",(err)=>{
console.log(err)}
);


import express from "express";
import { db } from "./DB/dbConnection.js";
import { User } from "./DB/userModel.js";
import { Message } from "./DB/messageModel.js";
import { userRoutes } from "./src/Modules/users/user.routes.js";
import { globalErrorHandler } from "./src/middleware/GlobalErrorHandling.js";
import { messageRoutes } from "./src/Modules/message/messages.routes.js";
import { AppError } from "./utilities/AppClassError.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/users",userRoutes);
app.use("/messages",messageRoutes);
app.use('*',(req,res,next)=>{
next(new AppError(`this route not found ${req.originalUrl}`,400))

})
app.use(globalErrorHandler)
app.get("/",(req,res)=>{
    res.json({message:"welcom"})
})
db().then(() => {
    console.log("DB connect successfully....")
}).catch(() => {
    console.log("DB Error..")

});
app.listen(port, () => {
    console.log("server is runnig")
})
