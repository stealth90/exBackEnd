var express = require('express');
var bigInt = require("big-integer");
var app = express();
app.listen(3001);

var storeFactorial = [];
function factorial (value) {
    var bigNumber = bigInt(value);
    if (bigNumber == 0 || bigNumber == 1)
        return 1;
    if (storeFactorial[bigNumber] > 0)
        return storeFactorial[bigNumber];
  return storeFactorial[bigNumber] = factorial(bigNumber-1) * bigNumber;
} 

app.get('/factorial/:value' , function(req, res){
    if(Number(req.params.value)){
       return res.json(factorial(req.params.value));
    } res.status(400).json('Inser a number value');
})