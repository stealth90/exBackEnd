var express = require('express');
var app = express();
app.listen(3001);
var enemyChoices = ['paper','scissors','rock'];
function randomChoice(array){
   let randomNumber = Math.floor(Math.random() * 3);
   console.log("Enemy choice " + array[randomNumber]);
   return array[randomNumber];
}
function doPlay(myChoice){
    var result = 0;
    let enemyChoice = randomChoice(enemyChoices);
    if( myChoice == enemyChoice){
        console.log(result);
        return result;
    }else if(
        (myChoice == 'papaer' && enemyChoice == 'rock') ||
        (myChoice == 'rock' && enemyChoice == 'scissors') ||
        (myChoice == 'scissors' && enemyChoice == 'paper')
    ){
        result = 1;
        console.log(result);
        return result;
    } else {
        result = -1;
        console.log(result);
        return result;
    }
};

app.get('/:choice',  function(req, res){
    res.json("Your score is " + doPlay(req.params.choice));
});
