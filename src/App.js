import Navbar from './components/Navbar';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'
            // @ts-ignore
            exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
