import './App.css'
import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Review from "./pages/Review";
import ReviewAdd from './pages/reviewAdd'; 

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/add-review" element={<ReviewAdd />} />
      </Routes>
    </Router>
    </>
  );
}
export default App
