import DoctorAllocation from '../modals/doctorAllocation.js'; 

export const getDoctorsAppointments = async (req, res) => {
  try {
    const doctorName = req.params.doctorName;
    const allocations = await DoctorAllocation.find({ doctorName });

    if (!allocations.length) {
      return res.status(404).json({ message: 'No assignments found for this doctor' });
    }

    res.status(200).json(allocations);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
