let slider = document.getElementById("slideRange");
let output = document.getElementById("totalPeople");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

const initialBill = parseInt(document.getElementById("initialBillAmount").value);
const numOfPeople = document.getElementById("totalPeople").value;
const tipPercentage = document.getElementById("tipPercentage").value

const tenPercent = (initialBill * 0.1)

const tipTotal = (tenPercent / 2) + tenPercent

const tipPerPerson = (tipTotal/ numOfPeople)



