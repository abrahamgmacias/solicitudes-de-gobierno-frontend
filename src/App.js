import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/pages/LoginPage';
import Navbar from './components/UI/molecules/Navbar';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { selectTokenValue } from './features/Login/tokenSlice';

function App() {
  const isTokenAvailable = useSelector(selectTokenValue);

  return (
    <BrowserRouter>
      <Navbar loginButtons={isTokenAvailable ? false : true} logoutButtons={isTokenAvailable ? true : false} />
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
