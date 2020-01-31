import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import AbautMe from './components/abautMe'
import Footer from './components/footer'
import Skills from './components/skills'
import Proyects2 from './components/proyects2';
import CoverPage from './components/coverPage';

class App extends Component{
     
  render(){
    return <div>
      
     
      
    
 
   <CoverPage/>
   <AbautMe/>
   <Proyects2/>
   
   <Skills/>
   <Footer/>
 

  
    </div>
    
  }
}

export default App;
