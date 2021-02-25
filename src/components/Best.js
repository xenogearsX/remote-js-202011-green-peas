import Carousel from "./Carousel";
import Footer from "./Footer";
import React from "react";
import Solutions from "./Solutions";

class Best extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Solutions />
        <Footer />
      </div>
    );
  }
}

export default Best;