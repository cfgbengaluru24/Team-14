import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SuperAdmin.css';

const SuperAdmin = () => {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    // Fetch locations from the API
    axios.get('http://localhost:3001/api/rbsks').then(response => {
      setLocations(response.data);
    });

    axios.get('/doctors.json').then(response => {
      setDoctors(response.data);
    });
  }, []);

  const handleAssignDoctor = (locationName, doctorName) => {
    setAssignments({ ...assignments, [locationName]: doctorName });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3001/api/assign-doctors', { assignments })
      .then(response => {
        alert('Assignments submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error submitting the assignments!', error);
      });
  };

  return (
    <div className="container">
      <h1>Super Admin Page</h1>
      {locations.map(location => (
        <div key={location._id} className="card">
          <h2>{location.centreName}</h2>
          <select
            value={assignments[location.centreName] || ''}
            onChange={(e) => handleAssignDoctor(location.centreName, e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div className='flex-col'>
        <button onClick={handleSubmit} className="submit-button">
          Submit Assignments
        </button>
        <button onClick={handleSubmit} className="submit-button">
          Cancel
        </button>
      </div>
      
    </div>
  );
};

export default SuperAdmin;
