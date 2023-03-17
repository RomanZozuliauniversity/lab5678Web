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

    document.getElementById("result").innerHTML = "Result: " + result;
}