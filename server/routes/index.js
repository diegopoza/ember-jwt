var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/api/restricted', function (req, res) {
//  console.log('user ' + 'req.user.email' + ' is calling /api/restricted');
//  res.json({
//    name: 'foo'
//  });
//});


module.exports = router;
