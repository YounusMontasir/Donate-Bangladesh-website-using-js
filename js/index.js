function getId (id){
    const elementId = document.getElementById(id)
    return elementId;
}
function getValueFromInput (id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
function getInnerTextById (id){
    const innerValue = document.getElementById(id).innerText
    return innerValue;
}
// places name object
    const places = {
        1:"Flood at Noakhali, Bangladesh",
        2: "famine-2024 at Feni, Bangladesh",
        3: "Aid for Injured in the Quota Movement, Bangladesh"

    }

// card 1 functionality

    function cardFunctionality(cardNumber){
    const donationAmount = parseFloat(getValueFromInput(`donation-amount-${cardNumber}`))
    const currentBalance = parseFloat(getInnerTextById("total-amount"))
    const donationBalannce = parseFloat(getInnerTextById(`donation-balance${cardNumber}`))
    
    if(isNaN(donationAmount) || donationAmount <= 0)
    {
        alert("Invalid number")
        return
    }


//    amount donate for noakhali
    const  totalDonatedAmount= (donationAmount + donationBalannce);
    const remainingBalance = (currentBalance - donationAmount)
    if(donationAmount > currentBalance ){
        alert("You have insuffuicient balance")
        return
    }
    
    
    document.getElementById(`donation-balance${cardNumber}`).innerText = totalDonatedAmount;
    document.getElementById("total-amount").innerText = remainingBalance
    // history element
    const historyElement = document.createElement('div')
    historyElement.className = "border border-gray-300 rounded-xl  p-8 mb-4"
    historyElement.innerHTML = `
        <p class = "text-xl font-bold">${donationAmount} Taka is Donate for 
        ${places[cardNumber]}</p>
        <p class= "opacity-70 font-light mt-4">${new Date().toLocaleString()}</p>
    `
    const newHistoryElement = document.getElementById("history-section")
    newHistoryElement.insertBefore(historyElement,newHistoryElement.firstChild )
    document.getElementById(`my_modal_${cardNumber}`).showModal();
    document.getElementById(`donation-amount-${cardNumber}`).value = ""

}
const cardNumber = 3;
for(let i=1;i<=cardNumber;i++){
    const donation = document.getElementById(`donate-btn${i}`)
    donation.addEventListener('click',function(){
        cardFunctionality(i);
    })
}


