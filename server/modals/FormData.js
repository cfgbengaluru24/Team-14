import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bloodGroup: String,
  contact: String,
  address: String,
  oral: Number,
  haemo: Number,
  images: [String],
  files: [String],
  plague: String,
  dentalCavity: String,
  diabetesRisk: String,
  anaemiaRisk: String,
  dentalHealth: String,
  diagnosis: String,
  medicines: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const FormData = mongoose.model('FormData', formDataSchema);

export default FormData;
