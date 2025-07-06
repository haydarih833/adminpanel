import AuthUser from "../models/AuthUser.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password)
            return res.status(400).json({ message: "All fields are required" });

        const existing = await AuthUser.findOne({ email });
        if (existing)
            return res.status(400).json({ message: "Email already exists" });

        const newUser = await AuthUser.create({ name, email, password });

        const token = jwt.sign({ id: newUser._id }, "harfSakhVaMahramane123", {
            expiresIn: "7d",
        });

        res.status(201).json({
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
            token,
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const SignInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await AuthUser.findOne({ email });
        if (!user)
            return res.status(401).json({ message: "Invalid email or password" });

        const isMatch = await user.matchPassword(password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user._id }, "harfSakhVaMahramane123", {
            expiresIn: "7d",
        });

        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};