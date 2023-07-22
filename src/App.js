import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Routes>
      {/* Each Route component defines a specific route and the component to render */}
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
