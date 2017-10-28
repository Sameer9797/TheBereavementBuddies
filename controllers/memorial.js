/**
 * GET /
 */
exports.memorialGet = function(req, res) {
    res.render('Memorial/Create', {
        title: 'new memorial'
    });
};

exports.memorialPost = function(req,res){

    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('birthYear', 'Email is not valid').isEmail();
    req.assert('deathYear', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    var errors = req.validationErrors();

    if (errors) {
        req.flash('error', errors);
        return res.redirect('/signup');
    }

    User.findOne({ email: req.body.email }, function(err, user) {
        if (user) {
            req.flash('error', { msg: 'The email address you have entered is already associated with another account.' });
            return res.redirect('/signup');
        }
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        user.save(function(err) {
            req.logIn(user, function(err) {
                res.redirect('/');
            });
        });
    });
};

/**
 * Created by sameer on 28/10/2017.
 */
