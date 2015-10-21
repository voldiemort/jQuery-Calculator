var calc = function(){
  var firstNumber = ($("#noone").val());
  var secondNumber = ($("#notwo").val());
  var operator = $("#operator").val();
  if(operator == "+"){
    var result = (firstNumber + secondNumber);
  }else if(operator == "-"){
    var result = (firstNumber - secondNumber);
  }else if(operator == "*"){
    var result = (firstNumber * secondNumber);
  }else if(operator == "/"){
    var result = (firstNumber / secondNumber);
  }else{
    var result = ("This calculation is invalid.")
  }
  var dp = ($("#dp").val());
  var final = $("#final");
  if($.isNumeric(result) == true){
    resultDisplay = (result.toFixed(dp));
    final.html(resultDisplay);
  }else{
    final.html(result);
  }
}
