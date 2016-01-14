import ReactDOM from 'react-dom'
import React from 'react';

class Hello extends React.Component {
  render() {
    return <h1>Hello gt-webdev</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
