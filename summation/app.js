var express =require('express');
var app = express();
app.listen(3001);

function summation(value) {
    var total = 0;
    if(value == 0){
      return total++;
    } else{
      for(var i = 0; i <= value; i++){
        total += i;
      }
      return total/(value +1);
  }
}

app.get('/summation/:value' , function(req,res){
    if(Number(req.params.value) || req.params.value == '0'){
        return res.json(summation(req.params.value));
    } res.status(400).json('Insert a number value');
})