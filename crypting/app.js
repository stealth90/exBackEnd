var express = require('express');
var app = express();
app.listen(3001);

function doEncrypt(word){
    var wordEncrypted = "";
    word.split('').forEach(function (c) {
        if(c == ' '){
            wordEncrypted += "99";
        }else if(Math.floor((c.charCodeAt(0)-65)/10) == 0 ){
            wordEncrypted = wordEncrypted.concat("0", c.charCodeAt(0)-65) ;
        }else wordEncrypted += "" +c.charCodeAt(0)-65;
    });
    return wordEncrypted;
}
function doDecrypt(word){
    var l = word.length;
    var wordDecrypted = "";
    for(let i=0 ; i < l ; i+=2){
        var wordSliced = word.slice(i , 2 +i);
        if(wordSliced == '99') {
            wordDecrypted += " ";
        }else wordDecrypted += String.fromCharCode(parseInt(wordSliced)+65);
    }
    return wordDecrypted;
}

app.get('/encrypt/:word', function(req,res){
    if(req.params.word){
        res.json(doEncrypt(req.params.word));
    } else res.status(400).json("error");
})
app.get('/decrypt/:word', function(req,res){
    if(req.params.word){
        res.json(doDecrypt(req.params.word));
    } else res.status(400).json("error");
})