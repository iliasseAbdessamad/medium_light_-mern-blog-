import crypto from "crypto"
import UserModel from "../models/User.js"

const usernameGenerator = async (req, res, next) => {
    let length = 8;
    let username;
    let exists = true;

    while (exists) {
        username = crypto.randomBytes(length).toString('hex').slice(0, length);
        exists = await UserModel.exists({ username });
    }

    req.body.username = username

    return next()
}

export default usernameGenerator

  
