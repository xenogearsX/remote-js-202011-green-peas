import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="search">
          <input type="search" placeholder="Rechercher un aliment" />
        </div>
      </div>
    );
  }
}

export default Footer;
