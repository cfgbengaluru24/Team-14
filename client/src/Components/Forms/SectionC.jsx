import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HealthForm.css';

const SectionC = () => {
  const [formData, setFormData] = useState({
    plague: '',
    dentalCavity: '',
    diabetesRisk: '',
    anaemiaRisk: '',
    dentalHealth: '',
    diagnosis: '',
    medicines: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
    };
    
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/form/sectionb');
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Is there any plague?</label>
        <select name="plague" value={formData.plague} onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>Dental Cavity?</label>
        <select name="dentalCavity" value={formData.dentalCavity} onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>Risk to Diabetes?</label>
        <select name="diabetesRisk" value={formData.diabetesRisk} onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>Risk to Anaemia?</label>
        <select name="anaemiaRisk" value={formData.anaemiaRisk} onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>Diagnosis:</label>
        <textarea name="diagnosis" value={formData.diagnosis} onChange={handleChange} />
      </div>
      <div>
        <label>Prescribed Medicines:</label>
        <textarea name="medicines" value={formData.medicines} onChange={handleChange} />
      </div>
      
      <button type="submit">Submit</button>
      <button onClick={handlePageChange}> Prev</button> 
    </form>
  );
};

export default SectionC;
