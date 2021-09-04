const billAmount = document.querySelector("#Bill-Amount")
const cashGiven = document.querySelector("#Cash-given")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message") 
const noOfNotes=document.querySelectorAll(".no_of_notes")
const availableNotes = [2000,500,100,20,10,05,01]

checkButton.addEventListener("click",function validateBillAmount(){
     hideMsg();
   if(billAmount.value>0)
   {
    if(cashGiven.value>=billAmount.value)
    {
     const amountToReturned = cashGiven.value-billAmount.value;
     calculateChange(amountToReturned);
    }
    else {
       showMessage("Do u wanna wash plates")
     }
   }
   else if(typeof billAmount.value === "string"){
    showMessage("Put the values in number")
   }
   
   else{
   
      showMessage("Invalid bill Amount");
   }
})

const calculateChange = (amountToReturned) => {
for(var i=0;i<=availableNotes.length;i++)
{
   const numberOfNotes= Math.trunc(amountToReturned/availableNotes[i])
   amountToReturned =amountToReturned%availableNotes[i];
   noOfNotes[i].innerText = numberOfNotes;
}
}
function hideMsg()
 {
   message.style.display="none";
   }
function showMessage(msg)
{
   message.style.display= "block";
   message.innerText=msg
}