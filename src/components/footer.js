import React, { Component } from 'react'
import './footer.css'
import logo from '../images/github-logo.png'
import logoEnvelope from '../images/envelope.png'
import logoLinkedin from '../images/linkedin-logo.png'
import Portfolio from '../images/portfolio.png'
import AppTalento from '../images/appTalento.png'
import ScrollableAnchor from "react-scrollable-anchor"

class Footer extends Component {
  render() {
    return (
      <ScrollableAnchor id="contacto">
        <div className="conrainerFooter">

          <p className="titleFooter">CONTACTO</p>
          <p className="information">Si estas interesado en trabajar juntos o necesitas más informacion sobre mí , no dudes en escribirme por los sigientes medios</p>
          <div className="containerLogo">
            <a href="https://github.com/martcamila1?tab=repositories" target="_blank"><img className="github" alt="Github" src={logo} /> </a>
            <a href="mailto:martcamila1@gmail.com" target="_blank"><img className="github" alt="Email" src={logoEnvelope} /></a>

            <a href="https://www.linkedin.com/in/camilamartinezmontecinos/" target="_blank" ><img className="github" alt="Linkedin" src={logoLinkedin} /></a>
            <a href="https://drive.google.com/file/d/1WccnlxCndKv1xwTnj9nMkBjmrGccVVgz/view" target="_blank" ><img className="github" alt="Portafolio" src={Portfolio} /></a>
            <a href="https://app.talento.laboratoria.la/profile/APFb2vf2MiMW7mtnJbdE4gbxZEW2" target="_blank" ><img className="github" alt="Portafolio" src={AppTalento} /></a>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Footer