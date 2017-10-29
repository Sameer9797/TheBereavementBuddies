/**
 * Created by sameer on 28/10/2017.
 */
var mongoose = require("mongoose");


var memorialSchema = new mongoose.Schema({
    name: String,
    birthYear: Date,
    deathYear: Date,
    image    : String,
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    memories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Memory"
        }
    ]
});




var Memorial = mongoose.model("Memorial",  memorialSchema);

module.exports = Memorial;