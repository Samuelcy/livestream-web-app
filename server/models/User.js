import mongoose from "mongoose";

const { Schema } = mongoose;

// User schema in DB
const userSchema = new Schema({
    email: { type: String, unique: true },
    usernane: { type: String },
    password: { type: String }
});

export default mongoose.model("User", userSchema);