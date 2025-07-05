import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import router from './routes/userRoutes.js'
import routerAuth from './routes/authRoutes.js'
import productsRouter from './routes/productsRoutes.js'


dotenv.config();
connectDB();
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/users", router)
app.use("/api/products",productsRouter)
app.use("/api/auth", routerAuth)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running pn port ${PORT}`)
})