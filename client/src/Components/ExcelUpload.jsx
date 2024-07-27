import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ExcelUpload.css';

const ExcelUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/api/upload-excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('File uploaded successfully!');
      } else {
        alert('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file.');
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload Excel Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ExcelUpload;
