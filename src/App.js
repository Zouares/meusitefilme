import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';  
import Login from './components/Login';
import Register from './components/Register';
import Movies from './components/Filmes';
import Series from './components/Series';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path ="/series" element={<Series />} />
      </Routes>
    </>
  );
}

export default App;
