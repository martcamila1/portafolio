import React ,{Component} from 'react'
import './footer.css'
import logo from '../images/github-logo.png'
import logoEnvelope from '../images/envelope.png'
import logoLinkedin from '../images/linkedin-logo.png'

class Footer extends Component {
  render(){
      return <div className="conrainerFooter">
      
           <p className="titleFooter">CONTACTO</p>

       <div className="containerLogo">   
            <a href="https://github.com/martcamila1?tab=repositories" target="_blank"><img className="github"alt="hola"src={logo}/> </a> 
           <img className="github"alt="hola2"src={logoEnvelope}/>
           
           <a href="https://www.linkedin.com/in/camilamartinezmontecinos/" target="_blank" ><img  className="github"alt="hola3"src={logoLinkedin}/></a>
       </div>
      </div>
  }
}

export default Footer