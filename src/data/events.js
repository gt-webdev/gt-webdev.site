import _ from 'lodash'

const events = [
  {
    "title": "Code and Chill",
    "start": new Date("Wed Apr 12 2017 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Apr 12 2017 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Alexa",
    "start": new Date("Tue Apr 11 2017 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Apr 11 2017 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/alexa-logo.png",
    "description": "We'll explore what Alexa can do"
  },
  {
    "title": "Web Application Security",
    "start": new Date("Tue Apr 4 2017 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Apr 4 2017 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/hacker-logo.jpg",
    "description": "Learn how hackers exploit common web application vulnerabilities (SQL Injection, XSS, CSRF, and more) and secure your web apps!"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Mar 29 2017 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Mar 29 2017 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "React VR",
    "start": new Date("Tue Mar 28 2017 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Mar 28 2017 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/react-logo.png",
    "description": "Come to this week's meeting to learn how to build Virtual Reality websites with React VR!! React VR simplifies building VR web applications, and lets you build web apps using only JavaScript!"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Mar 15 2017 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Mar 15 2017 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "ReactJS",
    "start": new Date("Tue Mar 14 2017 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Mar 14 2017 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/react-logo.png",
    "description": "Learn the very famous and modern front-end framework, ReactJS!"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Mar 8 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Mar 8 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Chrome Extensions",
    "start": new Date("Tue Mar 7 2017 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Mar 7 2017 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/chrome-logo.png",
    "description": "Learn how to make your own extensions for the very popular web browser, Google Chrome"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Mar 1 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Mar 1 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Database: MongoDB",
    "start": new Date("Tue Feb 28 2017 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 28 2017 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/mongodb-logo.png",
    "description": "Come to this week's meeting to learn about the various databases that exist and how you can use them with your website!"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Feb 22 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Feb 22 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Introduction to Web Server Programming",
    "start": new Date("Tue Feb 21 2017 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 21 2017 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/nodejs-logo.png",
    "description": "Come to this meeting to learn about basics of web server and how to create one with Node.js"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Feb 15 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Feb 15 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "JavaScript: Event Handling",
    "start": new Date("Tue Feb 14 2017 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 14 2017 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/javascript-logo.png",
    "description": "Make your webpage dynamic by learning the most popular web-scripting language, JavaScript"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Feb 8 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Feb 8 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "D3.js",
    "start": new Date("Tue Feb 7 2017 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 7 2017 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/javascript-logo.png",
    "description": "Turn your data into beautiful graphics with one of the most powerful visualization libraries, D3.js"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Feb 1 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Feb 1 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Bootstrap",
    "start": new Date("Tue Jan 31 2017 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Jan 31 2017 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/bootstrap-logo.png",
    "description": "Ever wondered if it's possible to style and make your web page look professional in no time? Learn Bootstrap and you'll be able to do just that!"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Jan 18 2017 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Jan 18 2017 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/events/1823600287912573/",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "How The Internet Works",
    "start": new Date("Tue Nov 29 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Nov 29 2016 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2447",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/internet.png",
    "description": "Come learn about how to build an N tier site and begin your journey to becoming a Web Developer!"
  },
  {
    "title": "Socket.io",
    "start": new Date("Tue Nov 29 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Nov 29 2016 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/socketio-logo.png",
    "description": "Come to learn more about utilizing WebSocket technology, using a javascript and nodejs library, Socket.io"
  },
  {
    "title": "MongoDB",
    "start": new Date("Tue Nov 15 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Nov 15 2016 20:00:00 GMT-0500 (EST)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to learn more about MongoDB and other database systems"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Nov 9 2016 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Wed Nov 9 2016 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Nov 2 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Nov 2 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Deployment",
    "start": new Date("Tue Nov 1 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Nov 1 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to learn how to deploy your website and make it available to the world."
  },
  {
    "title": "Code and Chill",
    "start": new Date("Wed Oct 19 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Oct 19 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come to chill with gt-webdev officers and other club members!"
  },
  {
    "title": "Redux Tutorial",
    "start": new Date("Tue Oct 18 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Oct 18 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/react-logo.png",
    "description": "Learn Redux and master front-end development!"
  },
  {
    "title": "Hang out with gt-webdev officers and buddies!",
    "start": new Date("Wed Oct 12 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Oct 12 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Come today to hangout with fellow web developers and get your questions answered!"
  },
  {
    "title": "Home Depot: TDD with Ruby on Rails",
    "start": new Date("Wed Oct 5 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Oct 5 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/homedepot-icon.png",
    "description": "Come see Home Depot talk about Test Driven Development using Ruby on Rails!"
  },
  {
    "title": "ReactJS",
    "start": new Date("Tue Oct 4 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Oct 4 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/react-logo.png",
    "description": "Come to learn a really cool front-end framework, ReactJS, and make your website dynamic"
  },
  {
    "title": "Introduction to Front-end Frameworks and Angular 1.5",
    "start": new Date("Wed Sep 28 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Sep 28 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/angularjs-logo.png",
    "description": "Come to this meeting to learn using a front-end framework and make cool web apps!"
  },
  {
    "title": "DOM Manipulation",
    "start": new Date("Tue Sep 27 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Sep 27 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/events/1841593719403441/",
    "image": "/img/internet.png",
    "description": "Learn how to use Javascript and JQuery to manipulate your web page to make it interactive!"
  },
  {
    "title": "Microsoft Azure Workshop",
    "start": new Date("Wed Sep 14 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Sep 14 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "Howey L4",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/microsoft-azure-logo.png",
    "description": "Come to this workshop co-hosted by Microsoft and learn about Microsoft Cloud Platform and introductory workshop to making web and mobile apps using Azure App Service. Bring your resume for a chance to win an XBOX ONE!"
  },
  {
    "title": "Javascript",
    "start": new Date("Tue Sep 13 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Sep 13 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": "https://www.facebook.com/GtWebdev",
    "image": "/img/javascript-logo.png",
    "description": "Learn JavaScript from 0 to 10 and become a master of dynamic web application developer!"
  },
  {
    "title": "Web API",
    "start": new Date("Tue Sep 7 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Sep 7 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "http://www.facebook.com/events/1135467673207360/",
    "image": "/img/internet.png",
    "description": "Have you ever wondered how your web browser communicates with a server? Did you know that you can integrate your web applications with other web apps like Facebook, Google, or anything? Come to this meeting to learn more about the basics of Web API. We're also going to build a web app that is integrated with Facebook and Microsoft's Machine Learning Service."
  },
  {
    "title": "HTML/CSS",
    "start": new Date("Tue Sep 6 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Sep 6 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": " https://www.facebook.com/events/1780166582229539/",
    "image": "/img/html5-logo.png",
    "description": "A web app without HTML/CSS is like a bird without wings. Learn the basics of web development by mastering HTML/CSS."
  },
  {
    "title": "Login Systems (Webdev Talk)",
    "start": new Date("Wed Aug 31 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Aug 31 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://facebook.com/events/171006130000571/",
    "image": "/img/auth0.png",
    "description": "Almost every web application needs a login system. Learn how to efficiently create a secure login system using auth0 API in this meeting."
  },
  {
    "title": "Introduction to gt-webdev!",
    "start": new Date("Tue Aug 30 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Aug 30 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 1443",
    "rsvpLink": "https://facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Welcome to gt-webdev! Learn what gt-webdev is all about and expect a great meeting!"
  }
];

const nextEvent = (() => {
  const now = new Date();
  return _.reduce(events, (result, e) => {
    return e.end > now && e.end < result.end ? e : result;
  });
})();

const upcomingEvents = (() => {
  const now = new Date();
  return _.filter(events, (e) => {
    return e.end > now && e.end != nextEvent.end;
  }).sort((a, b)  => {
    return a.start < b.start ? -1 : 1;
  });
})();

const pastEvents = (() => {
  const now = new Date();
  return _.filter(events, (e) => {
    return e.end < now;
  }).sort((a, b) => {
    return a.start < b.start ? 1 : -1;
  });
})();

module.exports = {
  events,
  nextEvent,
  upcomingEvents,
  pastEvents
}
