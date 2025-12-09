const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");
let num1 = null,
  num2 = null,
  res = null,
  oper = null;
let justCalculated = false;
let opAfterJustCalculated = false;

buttons.forEach((button) => {
  button.addEventListener("click", fn);
});
function fn(e) {
  if (e.target.classList.contains("number")) {
    if (justCalculated == true) {
      if (!opAfterJustCalculated) {
        num1 = null;
        res = null;
        oper = null;
      }
      display.textContent = "";
      justCalculated = false;
      num2 = null;
    }
    display.textContent += e.target.textContent;
    //   num1 = num1 * 10 + Number(button.textContent);
  } else if (e.target.id == "decimal") {
    if (display.textContent == "") display.textContent = 0;
    if (!display.textContent.includes(".")) {
      display.textContent += e.target.textContent;
    }
  } else if (e.target.classList.contains("operator")) {
    if (justCalculated == true) {
      //   display.textContent = "";
      //   justCalculated = false;
      opAfterJustCalculated = true;
      num1 = res;
      console.log("num1 inside if of operator ", num1);
    }
    oper = e.target.textContent;
    console.log(oper);
    if (num1 == null) {
      num1 = Number(display.textContent);
      display.textContent = "";
    }
  } else if (e.target.id == "equals") {
    if (justCalculated == false) {
      num2 = Number(display.textContent);
    }
    if (justCalculated) {
      num1 = res;
    }
    if (num1 != null && num2 != null) {
      operate(num1, num2, oper);
    }
  } else if (e.target.id == "ce") {
    opAfterJustCalculated = false;
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
  console.log("num1:", num1);
  console.log(operator);
  console.log("num2:", num2);

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
  console.log(res);
  console.log("");
  display.textContent = res;
  justCalculated = true;
}
