import { User } from "../../../DB/userModel.js"
import { AppError } from "../../../utilities/AppClassError.js";
import { catchError } from "../../middleware/CatchError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const signUp = catchError(async (req, res, next) => {
    const user = await User.create(req.body);
    console.log(user);
    res.json({ message: "welcome", user })

});
const signIn = catchError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {

        jwt.sign({
            userid: user._id,
            name: user.userName,
            email:user.email,
            password:user.password

        }, "thoria", (err, token) => {

            if (err) { next(new AppError(err, 404)) }
            else {
                res.status(200).json({ message: "welcome", token })


            }
        })

    } else {
        next(new AppError('inncorrect email or passsword..', 404))
    }

});


export { signIn, signUp }
