import User from "../models/user.js"

export const getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
};

export const addUser = async (req, res) => {
    const { name, username, email, city } = res.body
    const user = await User.create({ name, username, email, address: { city } })
    res.status(201).json(user)
}