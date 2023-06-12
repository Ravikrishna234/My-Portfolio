import React,{ useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Layout/Header';
import Description from './components/Description/Description';
function App() {
  
  return <React.Fragment>
      <Header></Header>
    	<main>
      	<Description></Description>
    	</main>
    </React.Fragment>
}

export default App
