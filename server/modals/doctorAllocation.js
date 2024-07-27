import mongoose from 'mongoose';

const doctorAllocationSchema = new mongoose.Schema({
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rbsk',
    required: true
  },
  doctorName: {
    type: String,
    required: true
  }
});

const doctorAllocation = mongoose.model('doctorAllocation', doctorAllocationSchema);

export default doctorAllocation;
