import User from "../models/user.js"

export const getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
};

export const addUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is missing' });
    }
    const { name, username, email, address } = req.body;

    // Validate required fields
    if (!name || !username || !email || !address || !address.city) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const city = address.city; // No need for optional chaining if validated
    try {
        const user = await User.create({ name, username, email, address: { city } });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, username, email, address } = req.body;
    try {
        const updated = await User.findByIdAndUpdate(
            id,
            { name, username, email, address },
            { new: true }
        );
        if(!updated){
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updated)
    } catch (error) {
        console.error("error in updateUser ", error)
        res.status(500).json({ message: "Error updating user" })
    }
}


export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(204).end();
    } catch (error) {
        console.error("error in deleteUser:", error)
        res.status(500).json({ message: "server error while deleting user" })
    }
}