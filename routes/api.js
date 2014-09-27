var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.query));
});

module.exports = router;
