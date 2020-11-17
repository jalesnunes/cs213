var apr
var term
var amount
var monthlyPayment

function calculatePayment() {
    term = document.getElementById("term").value;
    apr = document.getElementById("apr").value;
    amount = document.getElementById("amount").value;
    apr /= 1200;
    term *= 12;
    monthlyPayment = amount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1)
    document.getElementById("payment").value = "$" + monthlyPayment.toFixed(2);
}


function reset() 
{
    
}