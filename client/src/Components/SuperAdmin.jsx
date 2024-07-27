import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SuperAdmin.css';

const SuperAdmin = () => {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    // Fetch locations from the JSON file
    axios.get('/locations.json').then(response => {
      setLocations(response.data);
    });

    // Fetch doctors from the JSON file
    axios.get('/doctors.json').then(response => {
      setDoctors(response.data);
    });
  }, []);

  const handleAssignDoctor = (locationId, doctorId) => {
    setAssignments({ ...assignments, [locationId]: doctorId });
  };

  const handleSubmit = () => {
    // Mock submitting the assignments
    console.log('Assignments:', assignments);
    alert('Assignments submitted successfully!');
  };

  return (
    <div className="container">
      <h1>Super Admin Page</h1>
      {locations.map(location => (
        <div key={location.id} className="card">
          <h2>{location.name}</h2>
          <select
            value={assignments[location.id] || ''}
            onChange={(e) => handleAssignDoctor(location.id, e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-button">
        Submit Assignments
      </button>
    </div>
  );
};

export default SuperAdmin;
