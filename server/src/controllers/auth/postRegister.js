import User from "../../../models/User.js";
import bcrypt from "bcryptjs"

export const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.exists({ email })
        
        if (userExists) {
            return res.stats(409).send("Email already in use");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        })

        // Create JWT token
        

        // Send response back to user

    } catch (err) {
        console.log(err)
        return res.status(500).send('Error occured.')
    }

    return res.send("User is added to database");
}