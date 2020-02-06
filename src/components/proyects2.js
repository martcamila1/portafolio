import React, { Component } from 'react'
import Proyects from './proyects'
import './proyects.css'
import ImageBurgerQuenn from '../images/burger-queen.png'
import imageDataLover from '../images/data-lovers.png'
import imageSocialNetwork from '../images/social-network.png'

class Proyects2 extends Component{
    render(){
        return <div className="containerProyects" >
            <h6 className="titleProyects">MIS PROYECTOS</h6>
            <div className="containerCards">
            
            <Proyects nameProyects="Data lovers" imgProyects={imageDataLover} 
             clickCode="https://github.com/martcamila1/SCL011-data-lovers" 
             clickDemo="https://martcamila1.github.io/SCL011-data-lovers/src/index.html"
             />
            <Proyects nameProyects="Burger Queen" imgProyects={ImageBurgerQuenn} 
            clickCode="https://github.com/martcamila1/SCL011-Burger-Queen"
            clickDemo="https://burger-6d85a.firebaseapp.com/" />
            <Proyects nameProyects="Social Network" imgProyects={imageSocialNetwork} 
            clickCode="https://github.com/martcamila1/SCL011-Social-Network"
            clickDemo="https://camila-61ade.firebaseapp.com/" />
            </div>
        </div>

    }
}

export default Proyects2