import xlsx from 'xlsx';
import fs from 'fs';
import FormData from '../modals/FormData.js';

export const uploadExcel = async (req, res) => {
  try {
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Map JSON data to the FormData model
    const formDataArray = jsonData.map((data) => ({
      name: data.name,
      age: data.age,
      bloodGroup: data.bloodGroup,
      contact: data.contact,
      address: data.address,
      images: data.images ? data.images.split(',') : [],
      files: data.files ? data.files.split(',') : [],
      plague: data.plague,
      dentalCavity: data.dentalCavity,
      diabetesRisk: data.diabetesRisk,
      anaemiaRisk: data.anaemiaRisk,
      dentalHealth: data.dentalHealth,
      diagnosis: data.diagnosis,
      medicines: data.medicines,
    }));

    await FormData.insertMany(formDataArray);

    // Remove the file after processing
    fs.unlinkSync(filePath);

    res.status(200).json({ message: 'File uploaded and data saved successfully' });
  } catch (error) {
    console.error('Error uploading and processing file:', error);
    res.status(500).json({ error: 'Error uploading and processing file' });
  }
};
