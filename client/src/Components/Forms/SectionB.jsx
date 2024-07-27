import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HealthForm.css';

const SectionB= () => {
  const [formData, setFormData] = useState({
    images: null,
    files: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
    };
    
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
      // Add form submission logic here
      
      navigate("/form/sectionc");
    };
    
    const handlePageChange = () => {
       navigate('/form/sectiona');
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload Images:</label>
        <input type="file" name="images" onChange={handleFileChange} multiple />
      </div>
      <div>
        <label>Upload Files:</label>
        <input type="file" name="files" onChange={handleFileChange} multiple />
      </div>
      <button type="submit">Next</button>
      <button onClick={handlePageChange}>Prev</button>
    </form>
  );
};

export default SectionB;
