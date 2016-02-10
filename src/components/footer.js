import React from 'react';
import {Link} from 'react-router'

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <a href="https://www.facebook.com/GtWebdev/"><i className="fa fa-facebook"></i></a>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;