import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/Managedoctors.css';
import Navigation from './Navigation';

const ManageDoctors = () => {
  
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: '', location: '', available: true });

  useEffect(() => {
   
    axios.get('http://localhost:3001/doctors/')
      .then(res => setDoctors(res.data))
      .catch(err => console.log(err));
  }, []);

  const addDoctor = () => {
    if (newDoctor.name && newDoctor.location) {
      axios.post('http://localhost:3001/doctors/', newDoctor)
        .then(res => {
          setDoctors([...doctors, res.data]);
          setNewDoctor({ name: '', location: '', available: true });
        })
        .catch(err => console.log(err));
    }
  };

  const removeDoctor = (id) => {
    axios.delete(`http://localhost:3001/doctors/${id}`)
      .then(() => {
        setDoctors(doctors.filter(doctor => doctor._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navigation/>
   
    <div className="manageDoctors">
      <div className="cardHeader">
        <h2>Manage Doctors</h2>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Location</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.name}</td>
              <td>{doctor.location}</td>
              <td>
                <button onClick={() => removeDoctor(doctor._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="addDoctor">
        <h3>Add New Doctor</h3>
        <input
          type="text"
          placeholder="Name"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newDoctor.location}
          onChange={(e) => setNewDoctor({ ...newDoctor, location: e.target.value })}
        />
        <button onClick={addDoctor}>Add Doctor</button>
      </div>
    </div>
    </div>
  );
};

export default ManageDoctors;
