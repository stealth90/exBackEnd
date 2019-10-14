var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3001);

function findSortOrder(arr) {
    if(arr.length < 2) {
      return 'not enough items';
    }
    var ascending = null;
    var nextArr = arr.slice(1);
    for(var i = 0; i < nextArr.length; i++) {
      if (nextArr[i] === arr[i]) { 
      } else if(ascending === null) {
        ascending = nextArr[i] > arr[i];
      } else if (ascending !== nextArr[i] > arr[i]) {
        return 'unsorted';
      }
    }
    if(ascending === null) {
      return 'all items are equal';
    }
    return ascending ? 'ascending' : 'descending';
  }

  app.post('/sortOrder', function(req,res){
      if(req.body.numbers && req.body.constructor == Object){
          res.json(findSortOrder(req.body.numbers))
      }else res.status(400).json("Error");
});