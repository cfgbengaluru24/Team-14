import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Doctor.css'; 
function Doctor() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/getlocation")
      .then((response) => setLocations(response.data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="doctor-container">
      <h1 className="doctor-title">Select Your Location</h1>
      <select className="doctor-select" value={selectedLocation} onChange={handleLocationChange}>
        <option value="" disabled>Select a location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
      {selectedLocation && <p className="selected-location">Selected Location: {selectedLocation}</p>}
    </div>
  );
}

export default Doctor;
