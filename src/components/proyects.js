import React, { Component } from 'react'

import './proyects.css'

class Proyects extends Component {

  

  render() {
    return <div className="container1">


      <div id="card" class="card">

        <div id="cardImg" >
            <img  id="img" alt="prueba" src={this.props.imgProyects} />
      <div className="hoverImage"><p className="descriptionProyect"><p>{this.props.description}</p><p></p>{this.props.tools}</p></div>
        </div>
        

        <div id="cardButtons" >
          <p className="nameProyects">{this.props.nameProyects}</p>
        <div id="prueba">

          <a href={this.props.clickCode} rel="noopener noreferrer"><button className="cardButtons" > Codigo</button></a> 
          <a href={this.props.clickDemo} rel="noopener noreferrer"><button className="cardButtons" onClick={this.props.onClick}> Demo</button></a>
          </div>
        </div>

      </div>


    </div>
  }
}

export default Proyects