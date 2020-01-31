import React, { Component } from 'react'
import Proyects from './proyects'
import './proyects.css'
import ImageBurgerQuenn from '../images/burger-queen.png'
import imageDataLover from '../images/data-lovers.png'
import imageSocialNetwork from '../images/social-network.png'

class Proyects2 extends Component{
    render(){
        return <div className="containerProyects" >
            <h6 className="titleProyects">Mis Proyectos</h6>
            <div className="containerCards">
            
            <Proyects nameProyects="Data lovers" imgProyects={imageDataLover}  onclick />
            <Proyects nameProyects="Burger Queen" imgProyects={ImageBurgerQuenn}  onclick />
            <Proyects nameProyects="Social Network" imgProyects={imageSocialNetwork}  onclick />
            </div>
        </div>

    }
}

export default Proyects2