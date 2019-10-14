var express = require('express');
var app = express();
app.listen(3001);

function isTriangle(a,b,c){
    var result = "";
    let lateA = parseInt(a);
    let lateB = parseInt(b);
    let lateC = parseInt(c);
    if (((lateA + lateB) > c) && ((lateA + lateC) > lateB) && ((lateB + lateC) > lateA)){   
        result += "This is a triangle";
        if (lateA=== lateB && lateB === lateC)
            return result += " and it's Equilateral Triangle";
        else if(lateA === lateB || lateA === lateC || lateB === lateC)
                return result += " and it's Isosceles Triangle";
        else    return result += " and it's Scalene Triangle";
    }else   return result += "This is not a triangle";
}

app.get('/triangle', function(req,res) {
    if(req.query.a && req.query.b && req.query.c){
        res.json(isTriangle(req.query.a, req.query.b, req.query.c));
    } else res.status(401).json('Insert all values of lates');

})