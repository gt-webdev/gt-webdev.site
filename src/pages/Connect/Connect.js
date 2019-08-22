import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

class Connect extends Component {
    componentWillMount() {
        document.title = "Connect | gt-webdev";
    }
    render() {
        var actions = [
            {
                channel: "facebook",
                text: "Like us on Facebook.",
                url: "https://www.facebook.com/GtWebdev/"
            },
            {
                channel: "youtube",
                text: "Subscribe to our YouTube channel.",
                url: "https://www.youtube.com/channel/UCeYFMyequcLiFv0evR7x8hg"
            },
            {
                channel: "envelope",
                text: "Join our mailing list.",
                url: "https://lists.gatech.edu/sympa/subscribe/gt-webdev"
            }
        ];
        return (
            <div className="page-connect">
                <Menu />
                <div className="jumbotron" data-parallax-speed="40">
                    <h1>Connect with Us</h1>
                </div>
                <div className="container">
                    {actions.map((action) => {
                        return (
                        <a className={"connect-action action-" + action.channel} href={action.url} target="_blank">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="action-text">{action.text}</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="action-icon">
                                        <i className={"fa fa-" + action.channel} />
                                    </div>
                                </div>
                            </div>
                        </a>
                        );
                    })}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Connect;
