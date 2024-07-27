import express from 'express';
import { createFormData } from '../controller/formController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/patientInfo', upload, createFormData);

export default router;
