import express from "express"
import { logInUser, signup } from "../controllers/authController.js"

const routerAuth = express.Router()
routerAuth.post("/signup", signup);
routerAuth.post("/login",logInUser)
export default routerAuth