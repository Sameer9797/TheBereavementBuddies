/**
 * Created by sameer on 28/10/2017.
 */
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: String,
    birthYear: Date,
    deathYear: Date,
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);