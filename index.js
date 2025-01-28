const btnEl = document.getElementById("calculate")
const billInput= document.getElementById("bill")
const tipInput=document.getElementById("tip")
 function calculateTotal(){
    const billValue=billInput.value;
    const tipValue= tipInput.value;
    const totalValue=billValue *(1+tipValue/100);
    
    total.innerHTML=totalValue
    
    
    

 }
 function reset()
  {
   billInput.value=""
   tip.value = ""

   
 }

 btnEl.addEventListener("click",calculateTotal)
