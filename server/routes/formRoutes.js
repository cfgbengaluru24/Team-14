import express from 'express';
import { createFormData, getAllFormData } from '../controller/formController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/patientInfo', upload, createFormData);
router.get('/patientData', getAllFormData); 

export default router;
