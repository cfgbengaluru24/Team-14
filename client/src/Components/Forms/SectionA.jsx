import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HealthForm.css';

const SectionA = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };
    
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
      // Add form submission logic here
    
    navigate('/form/sectionb');
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
      <button type="submit">Next</button>
    </form>
  );
};

export default SectionA;
