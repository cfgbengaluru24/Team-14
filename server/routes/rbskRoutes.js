import express from "express";
import { createRbsk, getAllRbsk, assignDoctors } from "../controller/rbskController.js";

const router = express.Router();

router.post('/rbsk', createRbsk);

router.get('/rbsks', getAllRbsk); 

router.post('/assign-doctors', assignDoctors);

export default router;
