import React from 'react';
import {Link} from 'react-router'
import Navbar from './navbar'

class Root extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

module.exports = Root;