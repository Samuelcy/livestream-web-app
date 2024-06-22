import mongoose from "mongoose";

const { Schema } = mongoose;

// User schema in DB
const userSchema = new Schema({
    email: { type: String, unique: true },
    usernane: { type: String },
    password: { type: String },
    channel: { type: Schema.Types.ObjectId, ref: "Channel" },
    followedChannels: { type: [{ type: Schema.Types.ObjectId, ref: "Channel" }] }
});

export default mongoose.model("User", userSchema);