import User from "../../../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.exists({ email })

        if (userExists) {
            return res.status(409).send("Email already in use");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        })

        // Create JWT token, encrypt user detail, add secret,
        const token = jwt.sign({
            userId: user._id,
            email,
        },
            process.env.TOKEN_KEY,
            {
                expiresIn: "240h",
            }
        );

        // Send response back user data and jwt
        return res.status(201).json({
            userDetails: {
                email,
                username,
                token,
            }
        })

    } catch (err) {
        console.log(err)
        return res.status(500).send('Error occured.')
    }

    return res.send("User is added to database");
}