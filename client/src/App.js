import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {

  return (
     <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

