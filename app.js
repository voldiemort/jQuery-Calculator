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
  var resultDisplay = result.toFixed(2)
  var final = $("#final");
  final.html(resultDisplay);
}
