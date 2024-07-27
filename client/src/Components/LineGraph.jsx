import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const LineGraph = ({ patientName }) => {
  const [patientData, setPatientData] = useState([]);

  const fetchPatientData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/patientData');
      const data = await response.json();
      setPatientData(data);
    } catch (error) {
      console.error('Error fetching patient data', error);
    }
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  // Filter patient data by patient name
  const filteredData = patientData.filter(patient => patient.name === patientName);

  return (
    <LineChart width={600} height={300} data={filteredData}>
      <Line type="monotone" dataKey="oral" stroke="#8884d8" />
      <Line type="monotone" dataKey="haemo" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineGraph;
