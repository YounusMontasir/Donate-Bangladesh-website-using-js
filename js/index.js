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


document.getElementById('donate-btn1').addEventListener('click',function(){
    const donationAmount = parseFloat(getValueFromInput('donation-amount-1'))
    const currentBalance = parseFloat(getInnerTextById("total-amount"))
    const donationBalannce = parseFloat(getInnerTextById("donation-balance"))
    console.log(typeof donationAmount);
    
    if(isNaN(donationAmount))
    {
        alert("This is not a number")
        return
    }


//    amount donate for noakhali
    const  totalDonatedAmount= donationAmount + donationBalannce;
    const remainingBalance = currentBalance - donationAmount
    if(remainingBalance<donationAmount){
        alert("You have insuffuicient balance")
        return
    }
    document.getElementById("donation-balance").innerText = totalDonatedAmount;
    document.getElementById("total-amount").innerText = remainingBalance
    

})
