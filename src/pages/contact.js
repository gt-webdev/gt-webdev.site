import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Contact Us</h1>
        <ol>
          <li><a href="https://lists.gatech.edu/sympa/subscribe/gt-webdev">Subscribe to our mailing list.</a></li>
          <li><a href="https://www.facebook.com/GtWebdev/">Like us on Facebook.</a></li>
          <li><a href="https://www.youtube.com/channel/UCeYFMyequcLiFv0evR7x8hg">Subscribe to our YouTube channel.</a></li>
        </ol>
      </div>
    );
  }
}

module.exports = Contact;