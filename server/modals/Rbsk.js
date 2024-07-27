import mongoose from 'mongoose';

const rbskSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  postCode: {
    type: String,
    required: true
  },
  centreName: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  }
});

const Rbsk = mongoose.model('Rbsk', rbskSchema);

export default Rbsk;
