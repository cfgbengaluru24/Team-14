import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const oralData = [
  { name: 'Center 1', averageOralIndex: 85 },
  { name: 'Center 2', averageOralIndex: 90 },
  { name: 'Center 3', averageOralIndex: 75 },
  { name: 'Center 4', averageOralIndex: 80 },
  { name: 'Center 5', averageOralIndex: 95 },
];

const haemoglobinData = [
  { name: 'Center 1', averageHaemoglobinIndex: 13.5 },
  { name: 'Center 2', averageHaemoglobinIndex: 14.0 },
  { name: 'Center 3', averageHaemoglobinIndex: 12.8 },
  { name: 'Center 4', averageHaemoglobinIndex: 13.2 },
  { name: 'Center 5', averageHaemoglobinIndex: 14.5 },
];

const LocationAnalysis = () => {
  return (
    <div>
      <h2>Average Oral Index by Center</h2>
      <LineChart width={600} height={300} data={oralData}>
        <Line type="monotone" dataKey="averageOralIndex" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>

      <h2>Average Haemoglobin Index by Center</h2>
      <LineChart width={600} height={300} data={haemoglobinData}>
        <Line type="monotone" dataKey="averageHaemoglobinIndex" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default LocationAnalysis;
