import FormData from '../modals/FormData.js';

export const createFormData = async (req, res) => {
  try {
    const images = req.files['images'] ? req.files['images'].map(file => file.path) : [];
    const files = req.files['files'] ? req.files['files'].map(file => file.path) : [];

    const formData = new FormData({
      ...req.body,
      images,
      files
    });

    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
};


export const getAllFormData = async (req, res) => {
    try {
      const allFormData = await FormData.find();
      res.status(200).json(allFormData);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching form data' });
    }
  };
