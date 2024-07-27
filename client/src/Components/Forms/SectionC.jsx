import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HealthForm.css';

const SectionC = ({ formData, setFormData, handleFinalSubmit,visibility,setVisibility }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePageChange = () => {
    setVisibility('b');
  };

  return (
    <form onSubmit={handleFinalSubmit}>
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
        <label>Dental Health Details:</label>
        <textarea name="dentalHealth" value={formData.dentalHealth} onChange={handleChange} />
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
      <button type="button" onClick={handlePageChange}>Prev</button>
    </form>
  );
};

export default SectionC;
