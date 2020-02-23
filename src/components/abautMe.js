import React, { Component } from 'react';
import Profile from '../images/profile.JPG'
import './abautMe.css'
import ScrollableAnchor from "react-scrollable-anchor"

class AbautMe extends Component{
    render(){
      
        return (<ScrollableAnchor id="sobreMi">
           <div className="containerAbautMe">
                <p className="titleAbautMePhone">SOBRE MÍ</p>
                <div class="row">
                   
                 <div id="imgAbautMe" class="col m5 l5 xl5">
                 <div className="containerImg"></div> 
                     <img className="profile" alt="profile" src={Profile}/>
            </div> 
                 <div id="containerTitleText" class=" valign-wrapper col s12 m7 l7 xl7"> 
                   
                   <p id="titleAbautMe">SOBRE MÍ</p>
                   <p id="textAbautMe" >Front-End Developer y enfermera de profesión en constante búsqueda de nuevos aprendizajes.<br/>
Me gusta trabajar en equipos colaborativamente para contribuir al mejor resultado de este, apoyando con mi pro-actividad, perseverancia y responsabilidad .<br/>
Mi objetivo es incorporarme a un equipo donde pueda seguir creciendo profesionalmente y  pueda aportar mis conocimientos y habilidades adquiridas
.
                
    
                   </p> 
                </div>
                </div>
        </div>
        </ScrollableAnchor>
        )
    }
}
// class AbautMe extends Component{
//     render(){
//         return<div className="contaninerAbautMe">
//             <div id="abautMe"class=" center-align z-depth-1 section" >
//                 <p id="titleAbautMe" class="center-align orange-text text-darken-4">Sobre mi</p>
//                 <div className="containerTextAbautMe">
//                 Soy Front-end Developer  egresada de laboratoria  con capacidad de autoaprendizaje,  
//                 proactiva, con gran sentido de responsabilidad y perseverante en todos los trabajos 
//                 que me propongan. Me gusta enfrentarme a nuevos desafíos que ayuden a mi crecimiento profesional
//                 </div>
//             </div>
//         </div>
//     }
// }

export default AbautMe