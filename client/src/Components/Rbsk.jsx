import React, { useState } from 'react';
import axios from 'axios';
import '../styles/rbsk.css';
import { useNavigate } from 'react-router-dom';

const Rbsk = () => {
  const [formData, setFormData] = useState({
    city: '',
    postCode: '',
    centreName: '',
    priority: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/rbsk', formData).then(response => {
      alert('Data submitted successfully!');
      setFormData({
        city: '',
        postCode: '',
        centreName: '',
        priority: ''
      });
    });
    navigate('/superadmin')
  };

  return (
    <div className="rbsk-container">
      <h1>RBSK Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Post Code</label>
          <input
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Centre Name</label>
          <input
            type="text"
            name="centreName"
            value={formData.centreName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Priority</label>
          <input
            type="number"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Rbsk;
