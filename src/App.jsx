import React,{ useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Layout/Header';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
  <Router>
    <Header></Header>
    {/* <Description></Description> */}
    <Routes>
      {/* <Route exact path="/" component={<Description />} /> */}
      {/* <Route path="/projects" component={<Projects />} /> */}
      <Route exact path="/" element={<Description />}/>
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>
  )
      
}

export default App
