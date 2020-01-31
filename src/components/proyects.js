import React, { Component } from 'react'

import './proyects.css'

class Proyects extends Component {

  render() {
    return <div >

      
        <div id="card" class="card">

          <div id="cardImg" >
            <img class="activator" id="img" alt="prueba" src={this.props.imgProyects} />
          </div>
          <div id="cardButtons" >
           <p className="nameProyects">{this.props.nameProyects}</p>
            <div id="prueba">

              <button className="cardButtons" > Codigo</button>
              <button className="cardButtons" > Demo</button>
            </div>
          </div>

        </div>

  
    </div>
  }
}

export default Proyects