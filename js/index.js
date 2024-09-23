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

// card 1 functionality
const donationButton1 = document.getElementById('donate-btn1')
    donationButton1.addEventListener('click',function(){
    const donationAmount = parseFloat(getValueFromInput('donation-amount-1'))
    const currentBalance = parseFloat(getInnerTextById("total-amount"))
    const donationBalannce = parseFloat(getInnerTextById("donation-balance1"))
    
    if(isNaN(donationAmount) || donationAmount <= 0)
    {
        alert("Invalid number")
        return
    }


//    amount donate for noakhali
    const  totalDonatedAmount= donationAmount + donationBalannce;
    const remainingBalance = currentBalance - donationAmount
    if(donationAmount > currentBalance ){
        alert("You have insuffuicient balance")
        return
    }
    
    
    document.getElementById("donation-balance1").innerText = totalDonatedAmount;
    document.getElementById("total-amount").innerText = remainingBalance
    // history element
    const historyElement = document.createElement('div')
    historyElement.className = "border border-gray-300 rounded-xl  p-8 mb-4"
    historyElement.innerHTML = `
        <p class = "text-xl font-bold">${donationAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
        <p class= "opacity-70 font-light mt-4">${new Date().toLocaleString()}</p>
    `
    document.getElementById("history-section").appendChild(historyElement)
    document.getElementById("my_modal_1").showModal();
    document.getElementById("donation-amount-1").value = ""

})

// card 2 funtionality
const donationButton2 = document.getElementById('donate-btn2')
    donationButton2.addEventListener('click',function(){
    const donationAmount = parseFloat(getValueFromInput('donation-amount-2'))
    const currentBalance = parseFloat(getInnerTextById("total-amount"))
    const donationBalannce = parseFloat(getInnerTextById("donation-balance2"))
    
    if(isNaN(donationAmount) || donationAmount <= 0)
    {
        alert("Invalid number")
        return
    }


//    amount donate for feni
    const  totalDonatedAmount= donationAmount + donationBalannce;
    const remainingBalance = currentBalance - donationAmount
    if(donationAmount > currentBalance ){
        alert("You have insuffuicient balance")
        return
    }
    
    
    document.getElementById("donation-balance2").innerText = totalDonatedAmount;
    document.getElementById("total-amount").innerText = remainingBalance
    // history element
    const historyElement = document.createElement('div')
    historyElement.className = "border border-gray-300 rounded-xl  p-8 mb-4"
    historyElement.innerHTML = `
        <p class = "text-xl font-bold">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p class= "opacity-70 font-light mt-4">${new Date().toLocaleString()}</p>
    `
    document.getElementById("history-section").appendChild(historyElement)
    document.getElementById("my_modal_2").showModal();
    document.getElementById("donation-amount-2").value = ""

})

// card 3 functionality
const donationButton3 = document.getElementById('donate-btn3')
    donationButton3.addEventListener('click',function(){
    const donationAmount = parseFloat(getValueFromInput('donation-amount-3'))
    const currentBalance = parseFloat(getInnerTextById("total-amount"))
    const donationBalannce = parseFloat(getInnerTextById("donation-balance3"))
    
    if(isNaN(donationAmount) || donationAmount <= 0)
    {
        alert("Invalid number")
        return
    }


//    amount donate for noakhali
    const  totalDonatedAmount= donationAmount + donationBalannce;
    const remainingBalance = currentBalance - donationAmount
    if(donationAmount > currentBalance ){
        alert("You have insuffuicient balance")
        return
    }
    
    
    document.getElementById("donation-balance3").innerText = totalDonatedAmount;
    document.getElementById("total-amount").innerText = remainingBalance
    // history element
    const historyElement = document.createElement('div')
    historyElement.className = "border border-gray-300 rounded-xl  p-8 mb-4"
    historyElement.innerHTML = `
        <p class = "text-xl font-bold">${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class= "opacity-70 font-light mt-4">${new Date().toLocaleString()}</p>
    `
    document.getElementById("history-section").appendChild(historyElement)
    document.getElementById("my_modal_3").showModal();
    document.getElementById("donation-amount-3").value = ""

})

