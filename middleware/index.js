/**
 * Created by sameer on 28/10/2017.
 */

var User = require("../models/User");

// all the middleare goes here
var middlewareObj = {};

// middlewareObj.checkMemorialOwnership = function(req, res, next) {
//     if(req.isAuthenticated()){
//         Memorial.findById(req.params.id, function(err, foundMemorial){
//             if(err){
//                 req.flash("error", "Memorial not found");
//                 res.redirect("back");
//             }  else {
//                 // does user own the campground?
//                 if(foundMemorial.author.id.equals(req.user._id)) {
//                     next();
//                 } else {
//                     req.flash("error", "You don't have permission to do that");
//                     res.redirect("back");
//                 }
//             }
//         });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("back");
//     }
// }

// middlewareObj.checkCommentOwnership = function(req, res, next) {
//     if(req.isAuthenticated()){
//         Comment.findById(req.params.comment_id, function(err, foundComment){
//             if(err){
//                 res.redirect("back");
//             }  else {
//                 // does user own the comment?
//                 if(foundComment.author.id.equals(req.user._id)) {
//                     next();
//                 } else {
//                     req.flash("error", "You don't have permission to do that");
//                     res.redirect("back");
//                 }
//             }
//         });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("back");
//     }
//}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;