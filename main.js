let slider = document.getElementById("slideRange");
let output = document.getElementById("totalPeople");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

// document.getElementById('initialBillAmount').value.onchange = function(){
//     console.log(value)
// }

let calculateTip = (() => {
    let billAmount = document.getElementById('initialBillAmount').value
    let amountOfPeople = slider.value
    let tipPercentage = document.getElementById('tipPercent').value

    // Thought this would take tip percentage value and do math on click 
    // if(tipPercentage === .1){
    //     return billAmount *= .1
    // }else if(tipPercentage === 0.15){
    //     return billAmount *= .15
    // }else if(tipPercentage === 0.20){
    //     return billAmount *= .20
    // } else if(tipPercentage === 0.25){
    //     return billAmount *= .20
    // }else{
    //     return "error"
    // }

    console.log(billAmount,amountOfPeople,tipPercentage)
          
})
// console.log(calculateTip())


