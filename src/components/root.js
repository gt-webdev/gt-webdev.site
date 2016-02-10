import React from 'react';
import Menu from './menu'
import Footer from './footer'
class Root extends React.Component {
  render() {
    return (
      <div className={'page-' + (this.props.location.pathname.replace(/^\/+/,'').replace(/\//g,'-') || 'home')}>
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

module.exports = Root;