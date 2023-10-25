import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components for routing
import Home from './pages/Home';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
