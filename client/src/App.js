import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import HealthForm from './Components/Forms/HealthForm';
import SectionA from "./Components/Forms/SectionA.jsx";
import SectionB from "./Components/Forms/SectionB.jsx";
import SectionC from "./Components/Forms/SectionC.jsx";
<<<<<<< HEAD
import Doctor from './Components/Doctor';
import AdminDashboard from './Components/Dashboard/Admindashboard/Admindashboard';
import ManageDoctors from './Components/Dashboard/Admindashboard/ManageDoctors';
import Analysis from './Components/Dashboard/Admindashboard/Analysis';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Doctordashboard from './Components/Dashboard/Doctordashboard/Doctordashboard.jsx';
import AdminMessaging from './Components/Dashboard/Admindashboard/AdminMessaging.jsx';
import DoctorMessaging from './Components/Dashboard/Doctordashboard/DoctorMessaging.jsx';
=======
import Rbsk from './Components/Rbsk';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SuperAdmin from './Components/SuperAdmin';
import { useEffect, useState } from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
>>>>>>> 2861634ccad19289b6f071f0409b9b7952d47ed9

export default function App() {

  const loggedIn = localStorage.getItem("isLoggedIn");
  const [isloggedIn,setIsloggedIn] = useState(false);
  const [user, setLoginUser] = useState({});
  const [userDetails, setUserDetails] = useState({});
  
  useEffect(()=>{
    const storedUser = localStorage.getItem("userDetails");
    if(loggedIn){
      setUserDetails(JSON.parse(storedUser));
    }
    else{
      setUserDetails({});
    }
  },[])


  return (
     <BrowserRouter>
      <div className="App">
        {/* <Nav/> */}
        {
          loggedIn? <Nav isloggedIn={isloggedIn} userDetails={userDetails} setUserDetails={setUserDetails} setIsloggedIn={setIsloggedIn} loggedIn={loggedIn}/>:null
        }
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/form/sectiona" element={<SectionA />} />
          <Route path="/form/sectionb" element={<SectionB />} />
          <Route path="/form/sectionc" element={<SectionC /> } />
<<<<<<< HEAD
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/DoctorDashboard" element={<Doctordashboard/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/AdminDashboard/AdminMessaging" element={<AdminMessaging/>}/>
          <Route path="/DoctorDashboard/DoctorMessaging" element={<DoctorMessaging/>}/>
          <Route path="/AdminDashboard/ManageDoctor" element={<ManageDoctors/>}/>
          <Route path="/AdminDashboard/Analysis" element={<Analysis/>}/>
=======
          <Route path="/superadmin" element={<SuperAdmin/>} />
          <Route path="/rbsk" element={<Rbsk/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} setIsloggedIn={setIsloggedIn}/>}/>
          <Route path="/signup" element={<Signup setLoginUser={setLoginUser}/>}/>

>>>>>>> 2861634ccad19289b6f071f0409b9b7952d47ed9
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

