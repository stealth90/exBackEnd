var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3001);

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};
  
Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

app.post('/minMax', function(req,res){
    if(req.body.numbers && req.body.constructor == Object){
        var max;
        var min;
        arrayOfNumbers = req.body.numbers;
        max = Math.max.apply(null, arrayOfNumbers);
        min = Math.min.apply(null, arrayOfNumbers);
    
        res.json({
            Numbers: arrayOfNumbers,
            max: !isNaN(max) ? max : "This value is a string",
            min: !isNaN(max) ? min : "This value is a string"
        });
    } else res.status(400).json('The input is not an array');
})