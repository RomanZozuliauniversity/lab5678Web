//1
function compareArrays() {

    var array1 = document.getElementById("array1").value;
    var array2 = document.getElementById("array2").value;

    array1 = array1.split(",");
    array2 = array2.split(",");

    var result = [];
    for (var i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            result.push(array2[i]);
        }
    }
    document.getElementById("resultfirst").innerHTML = "Result: " + result;
}

//2
function printDescending() {
    var n = parseInt(document.getElementById("numberInput").value);
    var output = "";
    for (var i = n; i >= 0; i--) {
        output += i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}
//3
function generateArray() {
    const numberInput = document.getElementById('number-input');
    const number = Number(numberInput.value);
    
    const array = [];
    for (let i = 1; i <= number; i++) {
      array.push('x'.repeat(i));
    }
    
    const resultElement = document.getElementById('resulttask3');
    resultElement.textContent = array.join(', ');
  }
//4
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function checkPrimeNumbers() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",");
    const resultTable = document.getElementById("result4");
    
    resultTable.innerHTML = "";
  
    const headerRow = document.createElement("tr");
    const numberHeader = document.createElement("th");
    numberHeader.textContent = "Число";
    const primeHeader = document.createElement("th");
    primeHeader.textContent = "Просте";
    headerRow.appendChild(numberHeader);
    headerRow.appendChild(primeHeader);
    resultTable.appendChild(headerRow);
    
    
    for (let i = 0; i < numbers.length; i++) {
      const row = document.createElement("tr");
      const numberCell = document.createElement("td");
      numberCell.textContent = numbers[i];
      row.appendChild(numberCell);
      const primeCell = document.createElement("td");
      if (isPrime(numbers[i])) {
        primeCell.textContent = "Так";
      } else {
        primeCell.textContent = "Ні";
      }
      row.appendChild(primeCell);
      resultTable.appendChild(row);
    }
  }
//5
function validateAndCreateArray() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");
  const input5 = document.getElementById("input5");

  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");
  const checkbox3 = document.getElementById("checkbox3");
  const checkbox4 = document.getElementById("checkbox4");
  const checkbox5 = document.getElementById("checkbox5");

  const inputs = [input1, input2, input3, input4, input5];
  const checkboxes = [checkbox1, checkbox2, checkbox3, checkbox4, checkbox5];

  const values = [];


  for (let i = 0; i < inputs.length; i++) {
    const value = parseInt(inputs[i].value);
    if (isNaN(value)) {
      alert(`Field ${i+1} contains an invalid value`);
      return;
    }
    values.push(value);
  }

  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (checkboxes[i].checked) {
      newArray.push(values[i] / 2);
    }
  }
  
  const result = document.getElementById("result");
  result.textContent = newArray.join(", ");
}
  