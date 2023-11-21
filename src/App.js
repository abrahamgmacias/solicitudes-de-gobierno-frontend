import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/pages/LoginPage';
import Navbar from './components/UI/molecules/Navbar';
import LandingPage from './components/pages/LandingPage';
import BooksPage from './components/pages/BooksPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { selectToken } from './features/Login/tokenSlice';

function App() {
  const isTokenAvailable = useSelector(selectToken);

  return (
    <BrowserRouter>
      <Navbar loginButtons={isTokenAvailable ? false : true} logoutButtons={isTokenAvailable ? true : false} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registar-libro" element={<></>}/>
        <Route path="/libros" element={<BooksPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
