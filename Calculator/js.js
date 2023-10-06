let oldNumber = 0;
let lognumber = 0;
let operation;
function number(element) {

  if (oldNumber == 0 && element.innerHTML == 0) {
    oldNumber = 0;
  }else if (oldNumber === 0) {
    oldNumber = element.innerHTML;
  } else {
    oldNumber = String(oldNumber) + element.innerHTML;
  }

  if(lognumber == 0){
    document.getElementById("demo").innerHTML = oldNumber;
  } else{
    document.getElementById("demo").innerHTML = lognumber + " " + operation + " " + oldNumber;
  }
}
function clean() {
  oldNumber = 0;
  document.getElementById("demo").innerHTML = oldNumber;
}

function count(element) {
  operation = element.innerHTML;
  lognumber = oldNumber;
  oldNumber = 0;
  document.getElementById("demo").innerHTML = lognumber + " " + operation + " " + oldNumber;

  //Add condition if want ex.: 2+2+2
}

function equal() {
  // Convert the stored numbers to integers.
  let num1 = parseInt(lognumber);
  let num2 = parseInt(oldNumber);
  let result;

  // Perform the appropriate arithmetic operation based on the value of the 'operation' variable.
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "x") {
    result = num1 * num2;
  }
  // Update the calculator display with the result.
  document.getElementById("demo").innerHTML = result;

  // Reset the 'oldNumber' and 'lognumber' variables for the next calculation.
  oldNumber = result;
  lognumber = 0;
}
