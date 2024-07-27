import express from "express";
import { createRbsk, getAllRbsk } from "../controller/rbskController.js";

const router = express.Router();

router.post('/rbsk', createRbsk);

router.get('/rbsks', getAllRbsk); 

export default router;
