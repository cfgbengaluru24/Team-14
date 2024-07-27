import express from "express";
import { getUsers, login, signup } from "../controller/AuthController.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/getUsers", getUsers)

export default router;