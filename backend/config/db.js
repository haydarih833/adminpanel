import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/adminPanel")
        console.log(`mongoDB connected:${connect.connection.host}`)
    } catch (err) {
        console.error("mongodb connection failed:", err.message);
        process.exit(1)
    }
}

export default connectDB