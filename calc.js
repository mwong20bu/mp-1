//addition function for JS calculator
function addition() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) + Number(second);

    //if the output is negative, make it red
    if (result < 0) {
        output.style.color = "red";
    }
    document.getElementById("output").innerHTML = String(result);
}

//subtraction function for JS calculator
function subtraction() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) - Number(second);

    //if the output is negative, make it red
    if (result < 0) {
        output.style.color = "red";
    }
    document.getElementById("output").innerHTML = String(result);
}

//multiplication function for JS calculator
function multiplication() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) * Number(second);

    //if the output is negative, make it red
    if (result < 0) {
        output.style.color = "red";
    }
    document.getElementById("output").innerHTML = String(result);
}

//division function for JS calculator
function division() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first)/Number(second);

    //if the output is negative, make it red
    if (result < 0) {
        output.style.color = "red";
    }
    document.getElementById("output").innerHTML = String(result);
}

//exponent function for JS calculator
function power(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    //using a loop to multiply the first number by itself the second number amount of times
    let result = 1;
    for (i=0; i<second; i++){
        result = result * first;
    }

    //if the output is negative, make it red
    if (result < 0) {
        output.style.color = "red";
    }
    document.getElementById("output").innerHTML = String(result);
}

//function to clear the calculator
function clear_all(){
    document.getElementById("first").innerHTML = String("");
    document.getElementById("second").innerHTML = String("");
    document.getElementById("output").innerHTML = String("");
}