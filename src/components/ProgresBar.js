import React from 'react';
import './ProgresBar.css';
import flame from '../data/images/flame.png'

class ProgresBar extends React.Component {
    state = {
     count: flame,
     indicator: 10,
     width: 10,
        }
    
next = () => {
    console.log("next")
    this.setState({ indicator: this.state.indicator + 100, width: this.state.width + 100})
}
previous = () => {
    console.log("previous")
    this.setState({ indicator: this.state.indicator - 100, width: this.state.width - 100})
}
render () {

return (
    <div className="NavComponent">
        <div className="progresBar">
            <img id="flame" Indicator src={this.state.count} alt="flame indicator" style={{left: this.state.indicator}} />
            <div className="progresBarIndicator1" style={{width:this.state.width}}></div>
        </div>
        <div className="ButtonPad">
        <input className="ButtonTest" type="button" value="previous" onClick={this.previous}/>
        <input className="ButtonTest" type="button" value="next" onClick={this.next}/>
        </div>
    </div>
 
) 
}
}

export default ProgresBar