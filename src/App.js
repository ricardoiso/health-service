import SearchPage from './pages/search'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </Router>
);

export default App;
