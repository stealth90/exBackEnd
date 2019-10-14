var express = require('express');
var app = express();
app.listen(3001);

function isPalindrome(word){
    if(word.length ===0 || word.length === 1) return true;
    if(word[0].toLowerCase() !== word[word.length - 1].toLowerCase()) return false;
    return isPalindrome(word.substr(1, word.length -2));
}
app.get('/palindrome/:word', function(req,res){
    if(req.params.word){
        res.json(isPalindrome(req.params.word));
    } else res.status(400).json("Error");
})
