var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets')


// router.get('/tickets/new', ticketCtrl.new)
router.post('/flights/:id/tickets', ticketCtrl.create)
router.get('/flights/:id/tickets/new', ticketCtrl.new)



//POST /tickets/ .create
module.exports = router;