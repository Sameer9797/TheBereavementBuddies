/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('landing', {
    title: 'Home'
  });
};

