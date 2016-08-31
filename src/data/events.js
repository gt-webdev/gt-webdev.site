import _ from 'lodash'

const events = [
  {
    "title": "Login Systems",
    "start": new Date("Tue Aug 31 2016 18:30:00 GMT-0500 (EST)"),
    "end": new Date("Tue Aug 31 2016 20:30:00 GMT-0500 (EST)"),
    "location": "CCB 340",
    "rsvpLink": "https://facebook.com/events/171006130000571/",
    "image": "/img/auth0.png",
    "description": "Almost every web application needs a web app system. Learn how to efficiently create a secure login system using auth0 API in this meeting."
  },
  {
    "title": "Introduction to gt-webdev!",
    "start": new Date("Tue Aug 30 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Aug 30 2016 20:00:00 GMT-0500 (EST)"),
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
