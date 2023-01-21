const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights/index', {title: 'All Flights', flights})
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Details', flight})
    })
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'New Flight'})
}

function create(req, res) {
    const flight = new Flight(req.body);
    let currentTime = new Date();
    currentTime.setFullYear(currentTime.getFullYear() + 1)
    if(!flight.departs) flight.departs = currentTime;
    flight.save(function(err) {
        if(err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect('/flights')
    })
}

