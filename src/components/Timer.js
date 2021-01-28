import React from 'react'
import bouton from './Bouton'
import './timer.css'

class Timer extends React.Component {

let counter = 30
let intervalId = null
let timer = document.getElementById("bip")
let button = document.getElementById("button")
function start(){
  button.disabled = true
  intervalId = setInterval(bip, 1000)
  }

function bip() {
    counter--
    if(counter == 0) finish()
    else {	
        timer.innerHTML = counter + " secondes restantes"
    }
  }	
    function finish() {
      clearInterval(intervalId)
      timer.innerHTML = "TERMINE!"
      button.disabled = false
      counter = 30	
  }

    render(){
    return(
        <div>
            <button class="button" onclick="start()" id="button">Start Game</button>
            <div id="bip" class="compteur"></div>
        </div>
        )
    }
}
    


export default Timer
