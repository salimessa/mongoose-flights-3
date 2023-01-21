const Ticket = require('../models/ticket')
const Flight = require('../models/flight')


module.exports = {
    new: newTicket,
    create
}

function newTicket(req,res) {
        res.render('tickets/new', {flightId: req.params.id})
}

function create(req, res) {
    flightId = req.paramsId
    req.body.flight = req.params.id
    ticket.create(req.body, function (err, performer) {
    res.redirect(`/flights/${flightId}`)
    })
}