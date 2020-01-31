import React ,{Component} from 'react'
// import CoverPage1 from '../images/portada.jpg'
import Laptop from '../images/laptop.jpg'
import './coverPage.css'

class CoverPage extends Component{
    render(){
        return <div className="containerCoverPage">
            <nav>
            <div id="navegation" class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                   <li><a href="/">Sobre MÍ</a></li>
                   <li><a href="/">Proyectos</a></li>
                   <li><a href="/">Skills</a></li>
                   <li><a href="/">Contacto</a></li>
                 </ul>
            </div>
            </nav>
            <div>
            <img  className="coverPage" alt="imagen"src={Laptop}/>
            <div className="name">Camila Martinez </div>
            {/* <div>Front-End Developer</div> */}

            </div>
        </div>
    }
}

export default CoverPage