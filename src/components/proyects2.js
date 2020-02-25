import React, { Component } from 'react'
import Proyects from './proyects'
import './proyects.css'
import ImageBurgerQuenn from '../images/burger-queen.png'
import imageDataLover from '../images/data-lovers.png'
import imageSocialNetwork from '../images/social-network.png'
import TicTacToe from '../images/tictactoe2.png'
import ScrollableAnchor from "react-scrollable-anchor"

class Proyects2 extends Component{
    render(){
      
        return(
          <ScrollableAnchor id="proyectos">
          <div className="containerProyects" >
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
            description="Burger Queen permite a un restaurant  mejorar su sistema de pedidos a través de una plataforma que posibilita tomar órdenes y enviarlos a la cocina.
            " 
            tools="Herramientas utilizadas: React, JavaScript , Css3 , Firebase"
            />
            <Proyects nameProyects="Social Network" imgProyects={imageSocialNetwork} 
            clickCode="https://github.com/martcamila1/SCL011-Social-Network"
            clickDemo="https://camila-61ade.firebaseapp.com/" 
            description="Red social donde encontrarás todo lo que necesitas sobre cultivos, su objetivo es crear una comunidad donde se puedan compartir datos relacionados con el área.
            "
            tools="Herramientas utilizadas: Javascript , HTML5 , Css3 ,Firebase"
            />
             <div id="card" class="card">

        <div id="cardImg" >
        <img id="img" alt="prueba" src={TicTacToe} />
        <div className="hoverImage">
          <p className="containerDescription">
            <p className="descriptionProyect">Aplicación enfocada en niños basado en el juego de tic tac toe en donde los jugadores deben marcan los espacios alternadamente hasta que alguno complete 3 figuras en línea "</p>
            <p className="toolsProyect">"Herramientas utilizadas: React Native , Expo"</p></p></div>
        </div>


        <div id="cardButtons" >
        <p className="nameProyects">Tic Tac toe</p>
        <div id="prueba">

        <a href={this.props.clickCode} rel="noopener noreferrer"><button className="cardButtons" > Código</button></a>
        <a href={this.props.clickDemo} rel="noopener noreferrer"><button className="cardButtons" onClick={this.props.onClick}> Demo</button></a>
      </div> 
      </div>
             {/* <Proyects  nameProyects="Tic Tac Toe" imgProyects={TicTacToe} 
             clickCode="https://github.com/martcamila1/SCL011-data-lovers" 
             description="Aplicación enfocada en niños basado en el popular juego de tic tac toe en donde los jugadores deben marcan los espacios alternadamente hasta que alguno complete 3 figuras en línea " 
             tools="Herramientas utilizadas :javascript ,Css3 ,Html5"
             />*/}
            </div> 
        </div>
        </div>
        </ScrollableAnchor> 
        )
    }
}

export default Proyects2