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
             description=" Página web que  filtra ,ordena  y realiza un cálculo agregado de la data de Pokemón " 
             tools="Herramientas utilizadas :javascript ,Css3 ,Html5"
             />
            <Proyects nameProyects="Burger Queen" imgProyects={ImageBurgerQuenn} 
            clickCode="https://github.com/martcamila1/SCL011-Burger-Queen"
            clickDemo="https://burger-6d85a.firebaseapp.com/"
            description="Página web que permite tomar pedidos y enviarlos a cocina para que estos sean preparados.
            " 
            tools="Herramientas utilizadas: React, JavaScript , Css3 , Firebase"
            />
            <Proyects nameProyects="Social Network" imgProyects={imageSocialNetwork} 
            clickCode="https://github.com/martcamila1/SCL011-Social-Network"
            clickDemo="https://camila-61ade.firebaseapp.com/" 
            description="Red social que permite al usuario crear una cuenta de usuario, loguearse y crear post.
            "
            tools="Herramientas utilizadas: Javascript , HTML5 , Css3 ,Firebase"
            />
            </div>
        </div>

    }
}

export default Proyects2