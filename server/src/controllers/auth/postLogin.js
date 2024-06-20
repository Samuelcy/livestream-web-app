import User from "../../../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check email
        const user = await User.findOne({
            email: email.toLowerCase(),
        });

        // Check if password matches db password
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create JWT token, encrypt user detail, add secret,
            const token = jwt.sign({
                userId: user._id,
                email: user.email,
            },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "240h",
                }
            );

            // Send response back user data and jwt
            return res.status(200).json({
                userDetails: {
                    email: user.email,
                    token,
                    username: user.username,
                }
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send('Error occured.')
    }
}