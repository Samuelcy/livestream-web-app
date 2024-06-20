import User from "../../../models/User.js";

export const postRegister = async (req,res) => {
    // Sends User to DB
    const user = await User.create({
        username: "test",
        email: 'test@test.com',
        password: 'test',
    });

    return res.send("User is added to database");
}