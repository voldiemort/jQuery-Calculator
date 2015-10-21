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
  var final = $("#final");
  final.html(result);
}
