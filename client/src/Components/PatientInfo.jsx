import React, { useState, useEffect, useCallback } from 'react';
import '../styles/PatientInfo.css';

const PatientInfo = () => {
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPatients = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/getAllPatientInfo?page=${page}`);
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPatients(prevPatients => [...prevPatients, ...data]);
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    setPage(prevPage => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    fetchPatients(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="patient-info-container">
      {patients.length === 0 ? (
        <div className="patient-card demo-card">
          <h2>Bipradeep Bera</h2>
          <p><strong>Age:</strong> 22</p>
          <p><strong>Address:</strong> q3q3rwr42r24r42</p>
          <p><strong>Blood Group:</strong> B+</p>
          <p><strong>Contact:</strong> 6291526901</p>
          <p><strong>Anaemia Risk:</strong> yes</p>
          <p><strong>Dental Cavity:</strong> no</p>
          <p><strong>Dental Health:</strong> r2r2r2r4</p>
          <p><strong>Diabetes Risk:</strong> yes</p>
          <p><strong>Diagnosis:</strong> 23r2r2r24r22</p>
          <p><strong>Medicines:</strong> r2r2r2rr</p>
          <p><strong>Plague:</strong> yes</p>
        </div>
      ) : (
        patients.map((patient, index) => (
          <div key={index} className="patient-card">
            {patient.images && patient.images.length > 0 && (
              <div className="patient-card-image-container">
                {patient.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={`Patient ${index} Image ${imgIndex}`} className="patient-card-image"/>
                ))}
              </div>
            )}
            <h2>{patient.name}</h2>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Anaemia Risk:</strong> {patient.anaemiaRisk}</p>
            <p><strong>Dental Cavity:</strong> {patient.dentalCavity}</p>
            <p><strong>Dental Health:</strong> {patient.dentalHealth}</p>
            <p><strong>Diabetes Risk:</strong> {patient.diabetesRisk}</p>
            <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
            <p><strong>Medicines:</strong> {patient.medicines}</p>
            <p><strong>Plague:</strong> {patient.plague}</p>
          </div>
        ))
      )}
      {loading && <div className="loading">Loading...</div>}
      {!hasMore && <div className="end-of-cards">No more patients</div>}
    </div>
  );
};

export default PatientInfo;
