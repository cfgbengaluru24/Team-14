import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SectionA from "./Components/Forms/SectionA.jsx";
import SectionB from "./Components/Forms/SectionB.jsx";
import SectionC from "./Components/Forms/SectionC.jsx";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

