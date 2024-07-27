import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HealthForm.css';

const SectionA = ({ formData, setFormData,visibility,setVisibility }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setVisibility('b');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label>Blood Group:</label>
        <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
      </div>
      <div>
        <label>Contact Details:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
      </div>
      <div>
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label>Oral Index:</label>
        <input type="number" name="oral" value={formData.oral} onChange={handleChange} />
      </div>
      <div>
        <label>Haemoglobin index:</label>
        <input type="number" name="haemo" value={formData.haemo} onChange={handleChange} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default SectionA;
