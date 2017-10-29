/**
 * Created by sameer on 29/10/2017.
 */
/**
 * GET /
 */

var Memorial = require('../models/Memorial');
var Memory = require('../models/Memory');
var middleware = require("../middleware");


exports.memoryGet = function(req, res) {
    res.render('memories/create', {
        title: 'New Memory'
    });
};

exports.memoryPost = function(req,res) {

    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('body', 'must not be empty').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        req.flash('error', errors);
        return res.redirect('/memorial/create');
    }

    Memorial.findById(req.params.id, function(err, memorial) {
        if (err) {
            console.log(err);
            res.redirect("/memorial");
        }
        else {

            Memory = new Memory({
                name: req.body.name,
                body: req.body.body,
                author: req.user._id,
                time: Date.now()

            });

            Memory.save(function (err) {

                if (err) {
                    console.log(err);
                    res.redirect("/memorial");
                }
            });

            if(memorial.memories === null){
                memorial.memories = [];
                memorial.memories.push(Memory._id);
            }
            else{
                memorial.memories.push(Memory._id);
            }


            memorial.save();


        }

        console.log(memorial);



        req.flash("success", "Successfully added comment");
        res.redirect('/memorial/' + memorial._id);

    });







}




