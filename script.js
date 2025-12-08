const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");
let num1 = null,
  num2 = null,
  res = null;
oper = null;
justCalculated = false;

buttons.forEach((button) => {
  button.addEventListener("click", fn);
});
function fn(e) {
  if (!isNaN(e.target.textContent)) {
    if (justCalculated == true) {
      display.textContent = "";
      justCalculated = false;
      num1 = null;
      num2 = null;
      res = null;
      oper = null;
    }
    display.textContent += e.target.textContent;
    //   num1 = num1 * 10 + Number(button.textContent);
  } else if (e.target.className == "operator") {
    if (justCalculated == true) {
      display.textContent = "";
      justCalculated = false;
      num1 = res;
    }
    oper = e.target.textContent;
    if (num1 == null) {
      num1 = Number(display.textContent);
      display.textContent = "";
      console.log(num1);
    }
  } else if (e.target.id == "equals") {
    if (justCalculated == false) {
      num2 = Number(display.textContent);
    }
    if (justCalculated) {
      num1 = res;
    }

    operate(num1, num2, oper);
  } else if (e.target.id == "ce") {
    display.textContent = "";
    justCalculated = false;
    num1 = null;
    num2 = null;
    res = null;
    oper = null;
  } else if (e.target.id == "backSpace") {
    let len = display.textContent.length;
    display.textContent = display.textContent.slice(0, len - 1);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  console.log(num1);
  console.log(num2);
  console.log(operator);

  if (operator == "+") {
    res = add(num1, num2);
  }
  if (operator == "-") {
    res = subtract(num1, num2);
  }
  if (operator == "*") {
    res = multiply(num1, num2);
  }
  if (operator == "/") {
    res = divide(num1, num2);
  }
  display.textContent = res;
  justCalculated = true;
}
