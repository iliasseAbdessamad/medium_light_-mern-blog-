import bcrypt from "bcrypt"

const passHasher = async (req, res, next) => {
    
    const {password} = req.body
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.password = hashedPassword

    return next()
}

export default passHasher