import _ from 'lodash'

const events = [
  {
    "title": "Fundamentals of React",
    "start": new Date("Tue Feb 23 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 23 2016 20:00:00 GMT-0500 (EST)"),
    "location": "CCB 102",
    "rsvpLink": "https://facebook.com/"
  },
  {
    "title": "Why web development is the best thing ever",
    "start": new Date("Tue Feb 16 2016 18:00:00 GMT-0500 (EST)"),
    "end": new Date("Tue Feb 16 2016 20:00:00 GMT-0500 (EST)"),
    "location": "CCB 102",
    "rsvpLink": "https://facebook.com/"
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
  });
})();

module.exports = {
  events,
  nextEvent,
  upcomingEvents
}