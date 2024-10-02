// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';  
import Login from './components/Login';
import Register from './components/Register';
import Movies from './components/Filmes';
import Series from './components/Series';
import UserProfile from './components/UserProfile'; 
import { VideoProvider } from './VideoContext'; 

function App() {
  return (
    <VideoProvider> {/* Envolva seu App com o VideoProvider */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/user-profile" element={<UserProfile />} /> {/* Adicione a nova rota */}
      </Routes>
    </VideoProvider>
  );
}

export default App;
