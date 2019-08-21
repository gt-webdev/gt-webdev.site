import _ from 'lodash'

const events = [
    {
        "title": "CoC Org Fair",
        "start": new Date("Thu Aug 22 2019 17:00:00 GMT-0400 (EDT)"),
        "end": new Date("Thu Aug 22 2019 19:00:00 GMT-0400 (EDT)"),
        "location": "Noonan Courtyard (Outside Klaus)",
        "rsvpLink": "https://www.facebook.com/GtWebdev/",
        "image": "/img/gt-webdev-icon.png",
        "description": "Come out and learn more about us at the CoC organization fair!"
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
