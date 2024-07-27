import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SectionA from "./Components/Forms/SectionA.jsx";
import SectionB from "./Components/Forms/SectionB.jsx";
import SectionC from "./Components/Forms/SectionC.jsx";
import Doctor from './Components/Doctor';
import AdminDashboard from './Components/Dashboard/Admindashboard/Admindashboard';
import ManageDoctors from './Components/Dashboard/Admindashboard/ManageDoctors';
import Analysis from './Components/Dashboard/Admindashboard/Analysis';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Doctordashboard from './Components/Dashboard/Doctordashboard/Doctordashboard.jsx';
import AdminMessaging from './Components/Dashboard/Admindashboard/AdminMessaging.jsx';
import DoctorMessaging from './Components/Dashboard/Doctordashboard/DoctorMessaging.jsx';

export default function App() {

  return (
     <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/sectiona" element={<SectionA />} />
          <Route path="/form/sectionb" element={<SectionB />} />
          <Route path="/form/sectionc" element={<SectionC /> } />
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/DoctorDashboard" element={<Doctordashboard/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/AdminDashboard/AdminMessaging" element={<AdminMessaging/>}/>
          <Route path="/DoctorDashboard/DoctorMessaging" element={<DoctorMessaging/>}/>
          <Route path="/AdminDashboard/ManageDoctor" element={<ManageDoctors/>}/>
          <Route path="/AdminDashboard/Analysis" element={<Analysis/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

