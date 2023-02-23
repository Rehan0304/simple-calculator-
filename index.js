const firstNum = Number(prompt("enter first number"));
const secondNum = Number(prompt("enter second number"));
const operation = prompt("enter operation");
const add = firstNum + secondNum;
const sub = firstNum - secondNum;
const multiply = firstNum * secondNum;
const divide = firstNum / secondNum;
const modoulus = firstNum % secondNum;
if (operation == "+") {
  console.log(firstNum + " + " + secondNum + " = " + add);
} else if (operation == "-") {
  console.log(firstNum + " - " + secondNum + " = " + sub);
} else if (operation == "*") {
  console.log(firstNum + " * " + secondNum + " = " + multiply);
} else if (operation == "/") {
    console.log(firstNum + " / " + secondNum + " = " + divide);
} else if (operation == "%"){
    console.log(firstNum + " % " + secondNum + " = " + modoulus);
} else{
    console.log("please enter right opertion like +,-,*,/,%");
}
