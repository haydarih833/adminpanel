import AuthUser from "../models/AuthUser.js";
import bcrypt from 'bcryptjs'


export const signup = async (req, res) => {
    try {
        
        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }
        console.log(req.body)
        const { name, email, password } = req.body;
        const existing = await AuthUser.findOne({ email })
        console.log('[3]',existing)
        if (existing) {
            console.log('[4]')
            return res.status(400).json({ message: "Email already exists" })
        }
        const selt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, selt);
        const newUser = await AuthUser.create({ name, email, password: hashedPassword });
        console.log('[5]',newUser)
        const token = jwt.sign({ id: newUser._id }, harfSakhVaMahramane123, { expiresIn: "7d" })
        //    process.env.SECRET_KEY
        res.status(201).json({
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token,
        })
    } catch (error) {
        console.error("sign up error", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const SignInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await AuthUser.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid password" })

        const isMatch = await user.matchPassword(password)
        if (!isMatch) return res.status(401).json({ message: "wrong password" })
        const token = jwt.sign({ id: user._id }, harfSakhVaMahramane123, { expiresIn: "7d" })

        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        })

    } catch (error) {
        console.error("Login error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}