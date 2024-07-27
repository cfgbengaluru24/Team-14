import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HealthForm.css';

const SectionB = ({ formData, setFormData,visibility,setVisibility }) => {
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //change visibility
    setVisibility('c');
  };

  const handlePageChange = () => {
    setVisibility('a');
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
      <button type="button" onClick={handlePageChange}>Prev</button>
    </form>
  );
};

export default SectionB;
