import express from "express"
import {  SignInUser, signup } from "../controllers/authController.js"

const routerAuth = express.Router()
routerAuth.post("/signup", signup);
routerAuth.post("/signin",SignInUser)
export default routerAuth