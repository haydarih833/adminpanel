import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: String,
    email: { type: String, required: true, unique: true },
    address: {
        city: String,
    },
}, { timestamps: true }
)

const User = mongoose.model("User", userSchema)
export default User