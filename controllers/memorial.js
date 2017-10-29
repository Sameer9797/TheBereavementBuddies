/**
 * GET /
 */

var Memorial = require('../models/Memorial');
var middleware = require("../middleware");


exports.memorialGet = function(req, res) {
    res.render('Memorial/Create', {
        title: 'new memorial'
    });
};

exports.memorialPost = function(req,res){

    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('birthYear', 'must be valid date').isDate();
    req.assert('deathYear', 'must be valid date').isDate();
    req.assert('image','must be valid url');


    var errors = req.validationErrors();

    if (errors) {
        req.flash('error', errors);
        return res.redirect('/memorial/create');
    }

        Memorial = new Memorial({
            name: req.body.name,
            birthYear: req.body.birthYear,
            deathYear: req.body.deathYear,
            image    : req.body.image,
            author   : req.user._id
        });

        Memorial.save(function(err) {
            console.log(Memorial);
                res.redirect('/');
        });

    };

// exports.memorialView = function(req,res){
//     Memorial.findById(req.Memorial.id).populate("memories").exec(function(err,foundMemorial){
//         if(err) {
//             console.log(err);
//         }
//         else{
//             res.render("/memorial/show",{memorial:foundMemorial});
//         }
//
//     });
//
// }

exports.memorialView = function(req,res) {
    Memorial.find({}, function (err, foundMemorial) {
            console.log(foundMemorial);
            res.render("Memorial/index", {memorial: foundMemorial});


    });
}

exports.memorialPage = function(req,res){
    Memorial.findById(req.params.id,function(err, foundMemorial) {
        console.log(foundMemorial);
        res.render("Memorial/show", {memorial: foundMemorial});
    });
}


/**
 * Created by sameer on 28/10/2017.
 */
