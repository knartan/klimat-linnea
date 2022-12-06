import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
//import "bootstrap/dist/css/bootstrap.css";
import './Navbar.css';
import paths from "../routes/paths";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mylogo from "../images/Maskot-ljusare.png";

import { NavButton } from "./NavButton";

export function NavBar() {
  const [currentPath,setCurrentPath] = useState(paths.startViewPath);

  return (
    
    <>        
    <div className="container">
      
      <NavButton 
        iconpath={mylogo} 
        title="Start" 
        path={paths.startViewPath} 
        selected={currentPath == paths.startViewPath ? true : false}
        setAsActive={setCurrentPath}
      />

      <NavButton 
        title="Glaciär" 
        footerColor="#8BD69E" 
      />

      <NavButton 
        title="Havsnivåer" 
        footerColor="#67A2B3"
      />

      <NavButton 
        title="Fossila Bränslen" 
        footerColor="#FFB126" 
      />

      <NavButton 
        title="Temperatur" 
        footerColor="#F76245" 
        path={paths.temperaturViewPath} 
        selected={currentPath == paths.temperaturViewPath ? true : false} 
        setAsActive={setCurrentPath}
      />

      <NavButton 
        title="Quiz" 
        footerColor="#2E8336" 
        path={paths.quizViewPath} 
        selected={currentPath == paths.quizViewPath ? true : false}
        setAsActive={setCurrentPath}
      />
      
    </div>
    <div className="navbaroffset"></div>
</>

   
  );
}

