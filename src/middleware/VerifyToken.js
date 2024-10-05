import jwt from "jsonwebtoken";
import { AppError } from "../../utilities/AppClassError.js";
export const verifingToken = (req, res, next) => {
    const { token } = req.headers;

    jwt.verify(token, "thoria", (err, user) => {
        if (err) {
            next(new AppError(err, 404))
        }
        else {
            req.body.user = user;

            next()
        }
    })
}