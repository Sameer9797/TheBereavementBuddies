/**
 * GET /
 */
exports.memorialGet = function(req, res) {
    res.render('Memorial/Create', {
        title: 'new memorial'
    });
};

exports.memorialPost = function(req,res){

}

/**
 * Created by sameer on 28/10/2017.
 */
