var express = require('express');
var app = express();
app.listen(3001);

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return value + ' is not a primary number';
        }
    }
    return value + ' is a primary number';
}

app.get('/primary/:value' , function(req,res){
    if(Number(req.params.value)){
        return res.json(isPrime(req.params.value));
    }
    res.status(400).json('Insert valid number');
})