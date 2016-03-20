import _ from 'lodash'

const events = [
  {
    "title": "Introduction to Node.js",
    "start": new Date("Tue Mar 1 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Mar 1 2016 20:00:00 GMT-0500 (EST)"),
    "location": "CCB 102",
    "rsvpLink": "https://facebook.com/",
    "image": "/img/nodejs-logo.png",
    "description": "How cool is it to program in the same language on the client and the server? Node.js let us do that by bringing JavaScript to the server for the first time in computer history."
  },
  {
    "title": "REST APIs",
    "start": new Date("Tue Feb 23 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 23 2016 20:00:00 GMT-0500 (EST)"),
    "location": "CCB 102",
    "rsvpLink": "https://facebook.com/",
    "image": "/img/html5-logo.png",
    "description": "REST APIs let services interact with other services. In this meeting, we will learn about REST APIs, how to use them, and how to build them."
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