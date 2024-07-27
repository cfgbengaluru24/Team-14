import express from 'express';
import { uploadExcel } from '../controller/excelController.js';
import upload from '../middleware/multer1.js';

const router = express.Router();

router.post('/upload-excel', upload, uploadExcel);

export default router;
