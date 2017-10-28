
var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true
};

var memorySchema = new mongoose.Schema({
    name: String,
    body: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time : { type : Date, default: Date.now }
}, schemaOptions);


var Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;
