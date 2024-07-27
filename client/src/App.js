import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Rbsk from './Components/Rbsk';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SuperAdmin from './Components/SuperAdmin';

export default function App() {

  return (
     <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superadmin" element={<SuperAdmin/>} />
          <Route path="/rbsk" element={<Rbsk/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

