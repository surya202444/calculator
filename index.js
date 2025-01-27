const btnEl = document.getElementById("calculate")
const billInput= document.getElementById("bill")
const tipInput=document.getElementById("tip")
 function calculateTotal(){
    const billValue=billInput.value;
    const tipValue= tipInput.value;
    const totalValue=billValue *(1+tipValue/100);
    
    total.innerHTML=totalValue
    
    
    

 }

 btnEl.addEventListener("click",calculateTotal)
