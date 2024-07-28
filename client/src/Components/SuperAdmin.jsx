import React from 'react';
import '../styles/Home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIURL } from '../env';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";


const SuperAdmin = () => {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [dates, setDates] = useState({});

  useEffect(() => {
    // Fetch locations from the API
    axios.get('http://localhost:3001/api/rbsks').then(response => {
      setLocations(response.data);
    });

    axios.get(`${APIURL}/api/auth/getUsers`).then(response => {
    // axios.get(`/doctors.json`).then(response => {
      setDoctors(response.data);
    });
  }, []);

  const handleAssignDoctor = (locationName, doctorName) => {
    setAssignments(prev => ({ ...prev, [locationName]: { ...prev[locationName], doctorName }}));
  };

  const handleDateChange = (locationName, date) => {
    setDates(prev => ({ ...prev, [locationName]: date }));
    setAssignments(prev => ({ ...prev, [locationName]: { ...prev[locationName], startDate: date }}));
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(assignments)
    await axios.post('http://localhost:3001/api/assign-doctors', { assignments })
      .then(response => {
        alert('Assignments submitted successfully!');
        // navigate('/doctorPortal')
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
            value={assignments[location.centreName]?.doctorName || ''}
            onChange={(e) => handleAssignDoctor(location.centreName, e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
          <DatePicker 
            selected={dates[location.centreName] || new Date()} 
            onChange={(date) => handleDateChange(location.centreName, date)} 
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </div>
      ))}
      <div className='flex-col'>
        <button onClick={handleSubmit} className="submit-button">
          Submit Assignments
        </button>
        <button className="submit-button" onClick={()=>{
          window.location.href = '/AdminDashboard';
        }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SuperAdmin;
