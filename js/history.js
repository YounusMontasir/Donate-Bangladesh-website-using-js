const donationButton = document.getElementById("donation-btn")
const historyButton = document.getElementById("history-btn")
// when clicked history button
historyButton.addEventListener('click',function(){
    historyButton.classList.remove("bg-white" , 'border-[#1111114D]')
    historyButton.classList.add("bg-[#B4F461]")
    donationButton.classList.remove("bg-[#B4F461]" )
    donationButton.classList.add("border-[#1111114D]")

    document.getElementById("donation-section").classList.add("hidden")

    // history content hidden class remove
    document.getElementById("history-section").classList.remove("hidden")
    
   
})

// when clicked donation button
donationButton.addEventListener('click',function(){
    donationButton.classList.remove("border-[#1111114D]")
    donationButton.classList.add("bg-[#B4F461]")
    historyButton.classList.remove("bg-[#B4F461]")
    historyButton.classList.add("bg-white" , 'border-[#1111114D]')

    document.getElementById("donation-section").classList.remove("hidden")
    // history content hidden
    document.getElementById("history-section").classList.add("hidden")
})