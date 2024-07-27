import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APIURL } from '../env';
import { useParams } from 'react-router-dom';

const DoctorAppointments = ({ userDetails }) => {
  const { name } = useParams(); 
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${APIURL}/api/doctor/appointments/${name}`);
        setAppointments(response.data);
      } catch (err) {
        setError('Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    if (userDetails && userDetails.name) {
      fetchAppointments();
    }
  }, [userDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{userDetails.name}'s Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found for this doctor</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Appointment Details</h2>
            <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Location Details</h2>
            {appointment.location ? (
              <>
                <p><strong>City:</strong> {appointment.location.city}</p>
                <p><strong>Post Code:</strong> {appointment.location.postCode}</p>
                <p><strong>Centre Name:</strong> {appointment.location.centreName}</p>
                <p><strong>Priority:</strong> {appointment.location.priority}</p>
              </>
            ) : (
              <p>Location details not available</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorAppointments;
