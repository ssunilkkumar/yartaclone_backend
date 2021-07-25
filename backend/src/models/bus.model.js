const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    operator: {type: String, required: true},
    source: {type: String, required: true},
    destination: {type: String, required: true},
    fare: {type: String, required: true},
    departtime: {type: String, required: true},
    arrivaltime: {type: String, required: true},
    date: {type: String, required: true},
    bustype: {type: String, required: true},
    totalseat: {type: Number, required: true},
    availableseat: {type: Number, required: true},
    bookedseats: {type: [{type: Number, required: false}]},
}, {
    versionKey: false,
    timestamps: true
})

const Bus = mongoose.model("bus", busSchema);

module.exports = Bus;