import DoctorAllocation from '../modals/doctorAllocation.js'; 
import Rbsk from '../modals/Rbsk.js';

export const getDoctorsAppointments = async (req, res) => {
  try {
    const doctorName = req.params.doctorName;
    const allocations = await DoctorAllocation.find({ doctorName });

    if (!allocations.length) {
      return res.status(404).json({ message: 'No assignments found for this doctor' });
    }

    const detailedAllocations = await Promise.all(allocations.map(async (allocation) => {
      const location = await Rbsk.findById(allocation.locationId);
      return {
        ...allocation._doc,  
        location: location ? location._doc : null,
        date: allocation.date // Ensure the date field is included
      };
    }));

    res.status(200).json(detailedAllocations);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
