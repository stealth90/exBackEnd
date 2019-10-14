var express = require('express');
var app = express();
app.listen(3001);

function isLeapYear(year){
    return (year%100 == 0 ? year %400 == 0 : year%4 ==0);
}

app.get('/year/:value', function(req,res){
    if(Number(req.params.value)){
        if(isLeapYear(req.params.value)){
            res.json('The year ' + req.params.value + ' it\'s a leap year');
        } else res.json('The year ' + req.params.value + ' it\'s not a leap year')
    } else res.status('404').json('Insert a valid year value');
})