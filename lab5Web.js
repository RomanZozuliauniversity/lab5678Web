//lab5
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

//lab6 
//1
function validateExtesion(){
  const extesion =document.getElementById('Extesion').value;
  const pattern =/\.(txt|html|php)$/i;
  if (pattern.test(extesion)){
    alert('extesion is correct');
  }else{
    alert('Invalid extesion entered');
  }
}
//2
function validateDomain() {
    const domain = document.getElementById('domain').value;
    const pattern = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (pattern.test(domain)) {
      alert('domain is correct');
    } else {
      alert('Invalid domain entered');
    }
  }
//3
function replaceSpaces() {
  let inputText = document.getElementById("taskThird").value;
  let replacedText = inputText.replace(/\s+/g, ' ');
  document.getElementById("taskThird").value = replacedText;
}
//4
function removeComments() {
  let inputText = document.getElementById("taskFourth").value;
  let removedComments = inputText.replace(/<!--[\s\S]*?-->/g, '');
  document.getElementById("taskFourth").value = removedComments;
}
//5
function checkURL() {
  let inputText = document.getElementById("taskFifth").value;
  let urlPattern = /^(http|https)?:\/\//i;
  let isURL = urlPattern.test(inputText);
  if (isURL) {
    alert("Це URL-адреса!");
  } else {
    alert("Це не URL-адреса.");
  }
}

//lab7
//1
function getThirdword(){
  const inputTextword = document.getElementById('taskFirst').value; 
  const splitWord = inputTextword.split(" ");
  const thirdword = splitWord[2];
  alert( thirdword );
}
//2
function yesterdayDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const yesterdayIndex = (today.getDay() + 6) % 7;
  const yesterday = daysOfWeek[yesterdayIndex];
  const output = document.getElementById('outputdayofweek');
  output.textContent = `Yesterday was ${yesterday}.`;
}
//3
function calculateSquareRoot() {
  // отримуємо введене число
  const input = document.getElementById('inputThirdLab').value;
  if (input>0){
    const squareRoot = Math.round(Math.sqrt(input));

    // виводимо результат у повідомленні
    const output = document.getElementById('outputThirdLab');
    output.textContent = `The square root of ${input} is ${squareRoot}.`;
  }else if (input<0){
    alert("Invalid number entered");
  }else{
    alert("You did not inputed a value");
  }
}