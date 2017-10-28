/**
 * Created by sameer on 28/10/2017.
 */
var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    name: String,
    birthYear: Date,
    deathYear: Date,
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

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);