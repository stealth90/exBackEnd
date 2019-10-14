var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3001);

function getAverage(listOfNumbers){
    var sum =0;
    for(number of listOfNumbers){
        sum+=number;
    }
    return sum/(listOfNumbers.length);
}

app.post('/average' , function(req,res){
    if(req.body.numbers){
        res.json(getAverage(req.body.numbers));
    } else res.status(400).json("failed");
})