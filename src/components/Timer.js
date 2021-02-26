import React from "react";
import { Redirect } from "react-router-dom";

class Timer extends React.Component {
  state = {
    counter: 20,
    intervalId: null
  };
  timer = () => {
    this.setState({ intervalId: setInterval(this.bip, 1000) });
  };
  bip = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  componentDidMount() {
    this.timer();
  }
  render() {
    return (
      <div>
        <div id="bip" className="compteur">
          {this.state.counter + " s."}
        </div>
        {this.state.counter === 0 ? <Redirect to="/gameover" /> : null}
      </div>
    );
  }
}

export default Timer;
