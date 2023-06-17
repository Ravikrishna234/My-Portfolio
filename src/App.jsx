import React,{ useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Layout/Header';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
// import Skills fro,
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  
  return (
  <Router>
    <BodyBackground></BodyBackground>
    <Header></Header>
    {/* <Description></Description> */}
    <Routes>
      {/* <Route exact path="/" component={<Description />} /> */}
      {/* <Route path="/projects" component={<Projects />} /> */}
      <Route exact path="/" element={<Description />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      {/* ? */}
      {/* <Route path="/skills" element={<Skills />} ?> */}
      {/* </Route> */}
    </Routes>
  </Router>
  )
      
}

function BodyBackground(props) {
  const location = useLocation();
  useEffect(() => {
    const body = document.body;
    if(location.pathname == '/') {
      body.classList.add('descriptionBody');
    } else {
      // console.log('projectBodyu');
    // else if(location.pathname == '/projects') {
      body.classList.add('projectBody');
    }
    // Whenever component gets unmounted and location changes the cleanup function executes and then useEffect executes
    return () => {
      console.log('hello')
      // console.log(body.classList+'Here');
      // console.log(body.classList);
      body.classList.remove('descriptionBody', 'projectBody');
    }
  }, [location.pathname]); // dependencies array

  return <>{props.children}</>
}

export default App
