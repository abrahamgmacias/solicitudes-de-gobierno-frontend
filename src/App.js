import React from 'react';
import LoginPage from './components/pages/LoginPage';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/crear-solicitud" element={<></>}/>
        <Route path="/mis-solicitudes" element={<></>}/>
        <Route path="/solicitudes-cercanas" element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
