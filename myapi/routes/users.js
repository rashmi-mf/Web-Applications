var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let dataArray = [
    {name: "John", age: "25"},
    {name: "Rashmi", age: "25"},
    {name: "Lisa", age: "25"},
    {name: "Bruce", age: "25"},
    {name: "Bellion", age: "25"}
  ];

  res.json({
    data: dataArray
  })

});

module.exports = router;
