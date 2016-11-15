import _ from 'lodash'

const events = [
  {
    "title": "MongoDB",
    "start": new Date("Wed Nov 15 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Wed Nov 15 2016 20:00:00 GMT-0500 (EST)"),
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
