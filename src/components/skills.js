import React ,{Component} from 'react'
import './skills.css'
import logoGit from '../images/git.png'
import logoHtml from '../images/html5.png'
import logoCss from '../images/css-3.png'
import logoJS from '../images/javascript_icon.png'
import logoGithub from '../images/github-logo2.png'
import logoReact from '../images/react.png'
import logoFirebase from '../images/firebase_logo.png'
import logoNpm from '../images/npmLogo.png'
import logoNode from '../images/nodejs.png'
import ScrollableAnchor from "react-scrollable-anchor"
// import logoMaterialize from '../images/materialize.png'


class Skills extends Component{
    render(){
        return (
          <ScrollableAnchor id="skills">
        <div className="skillsContainer">
        <h3 className="skillsTitle">HABILIDADES TÉCNICAS</h3>
        <div className="containeLogos">
         
        <div>
        <img className="git" alt="logoGit2" src={logoJS}/>
        <p className="parrafo">Javascript</p>

        </div>

      
        <div>
        <img className="git" alt="logoGit2" src={logoHtml}/>
        <p className="parrafo">html</p>

        </div>

        <div>
            
            <img className="git" alt="logoCss" src={logoCss}/> 
            <p className="parrafo">Css3</p>
    
            </div>
            <div>
            
            <img className="git" alt="logoReact" src={logoReact}/> 
            <p className="parrafo">React</p>
    
            </div>
    
           
           
            <div>
        <img className="git" alt="logoGit" src={logoGit}/> 
        <p className="parrafo">Git</p>

        </div>

        <div>
        <img className="git" alt="logoGit2" src={logoGithub}/>
        <p className="parrafo">Github</p>

        </div>

        <div>
        <img className="git" alt="logoGit2" src={logoFirebase}/>
        <p className="parrafo">Firebase</p>

        </div>

        <div>
        <img className="git" alt="logoGit2" src={logoNpm}/>
        <p className="parrafo">NPM</p>

        </div>

        <div>
        <img className="git" alt="logoGit2" src={logoNode}/>
        <p className="parrafo">Node </p>

        </div>

        {/* <div>
        <img className="git" alt="logoGit2" src={logoMaterialize}/>
        <p className="parrafo">materialize </p>

        </div>
        */}
       
       
        
        
        

       
        </div>

        
        </div>
        </ScrollableAnchor>
        )
    }
}

export default Skills