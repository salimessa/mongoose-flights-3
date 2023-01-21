const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
    },
    arrival: {
    type: Date, 
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['Southwest', 'Delta', 'United', 'American', 'Jet Blue']
    },
    airport: {
        type: String,
        required: true,
        default: 'BWI',
        enum: ['LAX', 'BWI', 'IAD', 'DCA', 'ORD', 'MDW', 'SAN', 'AUS', 'DFW', 'DEN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const newDate = new Date()
            newDate.setFullYear(newDate.getFullYear() + 1)
            return newDate
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)