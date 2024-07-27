import express from "express";
import { getDoctorsAppointments } from "../controller/doctorController.js";

const router = express.Router();

router.get('/appointments/:doctorName', getDoctorsAppointments);

export default router;