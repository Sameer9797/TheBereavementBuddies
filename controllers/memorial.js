/**
 * GET /
 */

var Memorial = require('../models/Memorial');


exports.memorialGet = function(req, res) {
    res.render('Memorial/Create', {
        title: 'new memorial'
    });
};

exports.memorialPost = function(req,res){

    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('birthYear', 'must be valid date').isDate();
    req.assert('deathYear', 'must be valid date').isDate();



    var errors = req.validationErrors();

    if (errors) {
        req.flash('error', errors);
        return res.redirect('/memorial/create');
    }

        Memorial = new Memorial({
            name: req.body.name,
            birthYear: req.body.birthYear,
            deathYear: req.body.deathYear
        });

        Memorial.save(function(err) {
            console.log(Memorial);
                res.redirect('/');
        });

    };

/**
 * Created by sameer on 28/10/2017.
 */
