// Store the wallet amount to your local storage with key "amount"

var arr = JSON.parse(localStorage.getItem("amount"))||[]
         

var amount = document.querySelector("#amount").value
var wallet=document.querySelector("#wallet").value 

function addamountfuc(){
var wallet=document.querySelector("#wallet")


var amount = document.querySelector("#amount").value

var d = (Number)(arr)+(Number)(amount)
wallet.innerHTML=d
console.log(d)


localStorage.setItem("amount",JSON.stringify(d))

}

function bookmovie(){
window.location.href="./movies.html"
}
