import React from 'react';
import Footer from './components/Footer';
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import Intro from './screen/Intro';
import ProgresBar from './components/ProgresBar';
import Timer from './components/Timer';
import './App.css';
import FactsList from './components/FactsList';

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({loading: false})
    }, 160000);
  }

  render() {
    if(this.state.loading) {
      return (
        <div><Intro /></div>
      )
    }
    return (
      <div className="App">
        
          <div className='homePage'>
          <Nav />
          <Header />
          <Home />
          <Timer />
          <ProgresBar />
          <Footer />
         </div>     
        </div>     
    );
  }
}

export default App;
