import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config();
connectDB();
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running pn port ${PORT}`)
})