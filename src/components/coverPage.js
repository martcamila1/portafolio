import React ,{Component} from 'react'
//  import Laptop from '../images/blur-bottle.jpg'
//  import Laptop from '../images/pc3.jpg'
//  import Laptop from '../images/code.jpg'
import Laptop from '../images/coding4.png'
import './coverPage.css'

class CoverPage extends Component{
    render(){
        return <div className="containerCoverPage">
            <nav>
            
                <ul >
                <li className="nameNav"><a className="nameNav2" href="#contacto">Contacto</a></li>
                <li className="nameNav"><a className="nameNav2" href="#skills">Skills</a></li>
                <li className="nameNav"><a className="nameNav2" href="#proyectos">Proyectos</a></li>
                <li className="nameNav"><a className="nameNav2" href="#sobreMi">Sobre Mí</a></li>
                   
                   
                   
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
    }
}

export default CoverPage