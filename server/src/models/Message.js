import mongoose from "mongoose";

const { Schema } = mongoose;

// const defaultTitle = "New Channel";
// const defaultDescription = "This is a new channel.";

const messageSchema = new Schema({
    author: { type: String },
    content: { type: String },
    date: { type: Date },
});

export default mongoose.model("Message", messageSchema);