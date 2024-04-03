import logo from './logo.svg';
import '../src/Componentes/App.css';
import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Busco_Guia from './Componentes/FormularioBuscoGuia';
import {EVENTS} from './Componentes/const';
import HomePage from './Componentes/HomePage';
import Soy_Guia from './Componentes/FormularioSoyGuia';
import NavBar from './Componentes/Navbar';

function App() {
  const[currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const onLocationCHange = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationCHange);
    window.addEventListener(EVENTS.POPSTATE, onLocationCHange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationCHange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationCHange);
    }
  },[])
  return (
  
    <div>
      <NavBar/>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/BuscoGuia' && <Busco_Guia/>}
      {currentPath === '/SoyGuia' && <Soy_Guia/>}
   
    </div>
    
  );
}

export default App;
