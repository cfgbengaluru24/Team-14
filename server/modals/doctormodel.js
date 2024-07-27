import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
