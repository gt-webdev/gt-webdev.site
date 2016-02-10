import React from 'react';
import {Link} from 'react-router'
import Menu from './menu'

class Root extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

module.exports = Root;