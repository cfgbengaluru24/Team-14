import Rbsk from '../modals/Rbsk.js';

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
