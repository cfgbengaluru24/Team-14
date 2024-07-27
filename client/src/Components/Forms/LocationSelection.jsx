import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define the coordinates for each school
const statesData = {
  "Telangana": {
    "Hyderabad": {
      "School 1": { lat: 17.3850, lng: 78.4867 },
      "School 2": { lat: 12.9933, lng: 77.5878 }
    },
    "Warangal": {
      "School 3": { lat: 17.9835, lng: 79.5308 },
      "School 4": { lat: 18.0001, lng: 79.5882 }
    }
  },
  "Karnataka": {
    "Bangalore": {
      "School 5": { lat: 12.9362, lng: 77.6062 },
      "School 6": { lat: 12.9325, lng: 77.6884 }
    },
    "Mangalore": {
      "School 7": { lat: 13.0108, lng: 74.7943 },
      "School 8": { lat: 13.0108, lng: 74.7943 }
    }
  }
};

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const LocationSelection = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity("");
    setSchool("");
    setCoordinates(null);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setSchool("");
    setCoordinates(null);
  };

  const handleSchoolChange = (e) => {
    const selectedSchool = e.target.value;
    setSchool(selectedSchool);
    setCoordinates(statesData[state][city][selectedSchool]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state && city && school) {
      navigate("/Form/PatientInfo");
    }
  };

  const renderMap = () => {
    if (!coordinates) return null;
    return (
      <MapContainer center={coordinates} zoom={13} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates} />
      </MapContainer>
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ flex: 1 }}>
        <div>
          <label>
            State:
            <select value={state} onChange={handleStateChange}>
              <option value="">Select State</option>
              {Object.keys(statesData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            City:
            <select value={city} onChange={handleCityChange} disabled={!state}>
              <option value="">Select City</option>
              {state &&
                Object.keys(statesData[state]).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            School:
            <select value={school} onChange={handleSchoolChange} disabled={!city}>
              <option value="">Select School</option>
              {city &&
                Object.keys(statesData[state][city]).map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <button type="submit" disabled={!school}>
            Submit
          </button>
        </div>
      </form>
      <div style={{ flex: 1 }}>{renderMap()}</div>
    </div>
  );
};

export default LocationSelection;
