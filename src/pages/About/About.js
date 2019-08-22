import React, { Component } from 'react';
import Team from '../../components/Team/Team';

class About extends Component {
    componentWillMount() {
        document.title = "About | gt-webdev";
    }
    render() {
        return (
            <div className="about">
                <div className="jumbotron" data-parallax-speed="40">
                    <h1>About Us</h1>
                </div>
                <div className="container">
                    <div id="about-organization" className="row">
                        <div className="col-sm-7">
                            <h2>The Organization</h2>
                            <p>gt-webdev is a student organization within Georgia Tech's
                            College of Computing. Our club is dedicated to creating a
                            prosperous community of web developers. No matter whether you
                            are a beginner or a professional, you have a lot to learn
                            from us, and we have a lot to learn from you.
                            </p>
                        </div>
                        <div className="about-image" className="col-sm-5">
                            <img src="img/audience.jpg" />
                        </div>
                    </div>
                    <h2 className="center-heading">Team</h2>
                    <Team />
                    <h2 className="center-heading">Graduates</h2>
                    <Team graduates="true" />
                </div>
            </div>
        );
    }
}

export default About;
