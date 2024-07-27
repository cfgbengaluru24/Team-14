

import express from 'express';
import Doctor from '../modals/doctormodel.js';

const router = express.Router();

// Get all doctors
router.get('/', (req, res) => {
  Doctor.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Add a new doctor
router.post('/', (req, res) => {
  const newDoctor = new Doctor(req.body);
  newDoctor.save()
    .then(doctor => res.json(doctor))
    .catch(err => res.status(500).json({ error: err.message }));
});



// Delete a doctor
router.delete('/:id', (req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Doctor deleted' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

export default router;
