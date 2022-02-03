import SearchPage from './pages/search'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/404';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/:category"  element={<SearchPage />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
