import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => { drawChromeBoiAtCoords(e.clientX, e.clientY) }
  
  handleKeyDown = (e) => {
    if (e.key === 'a') { resize('+') } 
    else if (e.key === 's') { resize('-') }
  }
   
  render() {
    return (
      <canvas
        onClick={ () => {toggleCycling()} }
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
  
}
