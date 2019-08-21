import React, { Component } from 'react';
import {Link} from 'react-router';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <a href="https://www.facebook.com/GtWebdev/"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCeYFMyequcLiFv0evR7x8hg"><i className="fa fa-youtube"></i></a>
                    </div>
                </footer>
                <footer id="legal">
                    <div className="container">
                        <a href="/privacy">Privacy</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
