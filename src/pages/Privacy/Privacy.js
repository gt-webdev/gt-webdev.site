import React, { Component } from 'react';
import Team from '../../components/Team/Team';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

class Connect extends Component {
    componentWillMount() {
        document.title = "Privacy | gt-webdev";
    }
    render() {
        return (
            <div className="page-privacy">
                <Menu />
                <div className="privacy">
                    <div className="jumbotron" data-parallax-speed="40">
                        <h1>Privacy Policy</h1>
                    </div>
                    <div className="container">
                        <div id="privacy-policy" className="row">
                            <div className="col-sm-12">
                                <p>Last Updated: September 10, 2016</p>
                                <p>Protecting your private information is our priority. This Statement of Privacy applies to the gtwebdev.com and governs data collection and usage. By using this website, you consent to the data practices described in this statement.</p>
                                <h2>Collection of your Personal Information</h2>
                                <p>We may collect personally identifiable information, such as your name. We may also collect anonymous demographic information, which is not unique to you, such as your age, gender, and interests. We may gather additional personal or non-personal information in the future.</p>
                                <p>Information about your computer hardware and software may be automatically collected. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the website.</p>
                                <p>We encourage you to review the privacy statements of websites you choose to link to from this website so that you can understand how those websites collect, use and share your information. We are not responsible for the privacy statements or other content on websites outside of this website.</p>
                                <h2>Use of your Personal Information</h2>
                                <p>We may keep track of the websites and pages our users visit within this site, in order to determine what pages are the most popular.</p>
                                <p>We use Google Analytics. More information about how Google uses your data can be found at <a href="https://www.google.com/policies/privacy/partners/">https://www.google.com/policies/privacy/partners/</a>.</p>
                                <p>We will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process; (b) protect and defend our rights or property; and, (c) act under exigent circumstances to protect the personal safety of our users, or the public.</p>
                                <h2>Use of Cookies</h2>
                                <p>The website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.</p>
                                <p>One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page.</p>
                                <p>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the websites you visit.</p>
                                <h2>Security of your Personal Information</h2>
                                <p>We secure your personal information from unauthorized access, use or disclosure.</p>
                                <h2>Children Under Thirteen</h2>
                                <p>We do not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
                                <h2>Changes to this Statement</h2>
                                <p>We may occasionally update this Statement of Privacy to reflect company and customer feedback. We encourage you to periodically review this Statement to be informed of how we are protecting your information.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Connect;
