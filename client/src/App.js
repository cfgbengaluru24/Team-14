import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import HealthForm from './Components/Forms/HealthForm';
import SectionA from "./Components/Forms/SectionA.jsx";
import SectionB from "./Components/Forms/SectionB.jsx";
import SectionC from "./Components/Forms/SectionC.jsx";
import Rbsk from './Components/Rbsk';
import ExcelUpload from './Components/ExcelUpload.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SuperAdmin from './Components/SuperAdmin';
import { useEffect, useState } from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import LineGraph from './Components/LineGraph.jsx';

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
          <Route path="/form" element={<HealthForm />} />
          <Route path="/form/sectiona" element={<SectionA />} />
          <Route path="/form/sectionb" element={<SectionB />} />
          <Route path="/form/sectionc" element={<SectionC /> } />
          <Route path="/superadmin" element={<SuperAdmin/>} />
          <Route path="/excelupload" element={<ExcelUpload/>} />
          <Route path="/linegraph" element={<LineGraph/>} />
          <Route path="/rbsk" element={<Rbsk/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} setIsloggedIn={setIsloggedIn}/>}/>
          <Route path="/signup" element={<Signup setLoginUser={setLoginUser}/>}/>

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

