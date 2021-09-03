let slider = document.getElementById("slideRange");
let output = document.getElementById("totalPeople");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

// document.getElementById('initialBillAmount').value.onchange = function(){
//     console.log(value)
// }
let tipPercentage = 0;
function tipValue(event){
    tipPercentage = parseFloat(event.target.value)
    // event.target.classList.add('')
    // document.getElementsByClassName('selected')[0].classList.remove('selected')
    console.log(tipPercentage)
}



let calculateTip = (() => {
    let billAmount = parseFloat(document.getElementById('initialBillAmount').value)
    let amountOfPeople = slider.value
    

    let tipAmount = parseFloat((billAmount*tipPercentage).toFixed(2))
    billAmount += tipAmount
    let pricePerPerson = parseFloat((billAmount/amountOfPeople).toFixed(2))
    console.log(pricePerPerson)

    document.getElementById('tipAmount').innerText = `Your tip amount is: $${tipAmount}`
    document.getElementById('totalBillAmount').innerText = `Your bill total is: $${billAmount}`
    document.getElementById('pricePerPerson').innerText = `Each person pays: $${pricePerPerson}`

    console.log(billAmount,amountOfPeople,tipPercentage)
          
})


