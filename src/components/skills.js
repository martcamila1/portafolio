import React ,{Component} from 'react'
import './skills.css'
import logoGit from '../images/git.png'
import logoHtml from '../images/html5.png'
import logoCss from '../images/css-3.png'
import logoJS from '../images/javascript_icon.png'
import logoGithub from '../images/github-logo2.png'
import logoReact from '../images/react.png'



class Skills extends Component{
    render(){
        return <div className="skillsContainer">
        <h3 className="skillsTitle">Skills</h3>
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
        <p className="parrafo">html5</p>

        </div>


       
        
        
        

       
        </div>

        
        </div>
    }
}

export default Skills