import Rbsk from '../modals/Rbsk.js';
import DoctorAllocation from '../modals/doctorAllocation.js';

export const createRbsk = async (req, res) => {
  try {
    const { city, postCode, centreName, priority } = req.body;
    const newRbsk = new Rbsk({
      city,
      postCode,
      centreName,
      priority
    });
    await newRbsk.save();
    res.status(201).json(newRbsk);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// Fetch all RBSK entries
export const getAllRbsk = async (req, res) => {
    try {
      const rbsks = await Rbsk.find();
      res.status(200).json(rbsks);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };


// Save doctor allocations
export const assignDoctors = async (req, res) => {
    try {
      const assignments = req.body.assignments;
      const allocationPromises = Object.keys(assignments).map(async locationName => {
        const location = await Rbsk.findOne({ centreName: locationName });
        const {doctorName, startDate } = assignments[locationName];
        
        const doctorAllocation = new DoctorAllocation({
          locationId: location._id,
          doctorName: doctorName,
          date: new Date(startDate)
        });
        await doctorAllocation.save();
      });
      await Promise.all(allocationPromises);
      res.status(200).json({ message: 'Assignments saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };