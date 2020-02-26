import React ,{Component} from 'react'
//  import Laptop from '../images/blur-bottle.jpg'
//  import Laptop from '../images/pc3.jpg'
//  import Laptop from '../images/code.jpg'
import Laptop from '../images/coding4.png'
import './coverPage.css'
import ScrollableAnchor from "react-scrollable-anchor"

class CoverPage extends Component{
    render(){
        return (
          <ScrollableAnchor id="home">
        <div className="containerCoverPage">
            <nav>
            
                <ul >
                <li className="nameNav"><a className="nameNav2" href="#contacto">Contacto</a></li>
                <li className="nameNav"><a className="nameNav2" href="#skills">Habilidades</a></li>
                <li className="nameNav"><a className="nameNav2" href="#proyectos">Proyectos</a></li>
                <li className="nameNav"><a className="nameNav2" href="#sobreMi">Sobre Mí</a></li>
                <li className="nameNav" id="home"><a className="nameNav2" href="#home">Home</a></li>
                   
                   
                   
                 </ul>
            
            </nav>
            <div>

            <img className="coverPage" alt="imagen"src={Laptop}/>
            <div className="containerNameDeveloper">
            <div className="name">CAMILA MARTÍNEZ </div>
            <div className="developer">Front-End Developer</div>
            
         </div>
            </div>
        </div>
        </ScrollableAnchor>
        )
    }
        
}

export default CoverPage