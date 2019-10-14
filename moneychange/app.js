var express = require('express');
var app = express();
var fs = require('fs');
var moneyCount = JSON.parse(fs.readFileSync('result.json'));
fs.writeFileSync('result.json', JSON.stringify(moneyCount));
app.listen(3001);
var denominations = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500];

function findMinCoins(req,res,next){
    moneyCount = {};
    if(Number(req.query.price) && Number(req.query.myMoney)){
        let rest = req.query.myMoney - req.query.price ;
        if(rest < 0 ){
            res.locals.result = "You have inserted less money than the product price. Need more " + Math.abs(rest) + " €";
            return next();
        }
        else{
            for(let i=denominations.length -1 ; i>=0; i--){
                while( (( rest *100) /100) >= denominations[i] ){
                    rest = (( rest *100 )/100 ) - denominations[i];
                    if(!moneyCount[denominations[i]]){
                        moneyCount[denominations[i]] = 1 ;
                    }else moneyCount[denominations[i]] +=1 ;
                }
            }
            res.locals.result = moneyCount;
            return next();
        }
    }
    res.status(404).json({message: 'You can\'t buy products with words !!!!!'});
}

app.get('/money' , findMinCoins, function(req,res){
    res.json(res.locals.result);
})