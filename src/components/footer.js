import React ,{Component} from 'react'
import './footer.css'
import logo from '../images/github-logo.png'
import logoEnvelope from '../images/envelope.png'
import logoLinkedin from '../images/linkedin-logo.png'

class Footer extends Component {
  render(){
      return <div className="conrainerFooter">
      
           <p className="titleFooter">Contáctame</p>

       <div className="containerLogo">   
           <img className="github"alt="hola"src={logo}/> 
           <img className="github"alt="hola2"src={logoEnvelope}/>
           <img className="github"alt="hola3"src={logoLinkedin}/>
       </div>
      </div>
  }
}

export default Footer