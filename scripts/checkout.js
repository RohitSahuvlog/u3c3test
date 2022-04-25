// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


var arr1 = JSON.parse(localStorage.getItem("amount"))
    var wallet = document.querySelector("#wallet")
  wallet.innerHTML=arr1

  var arr2= JSON.parse(localStorage.getItem("movie"))||[]

  arr2.map(function(data){
    var pic = document.createElement("img")
pic.setAttribute("src",data.Poster)

var title  =document.createElement("p")
title.innerHTML="Title"+data.Title;
var btn = document.createElement("button")
btn.innerHTML="booknow"
btn.setAttribute("class","book_now")
// btn.addEventListener("click",function(){
//   bookfunc(data)
// })

document.querySelector("#movie").append(pic,title)
  })

function confirmfunc(){
    
var seats = document.querySelector("#number_of_seats").value
  var seat= seats *  100 
  // console.log(seat)
  // console.log(seats)
if(wallet.innerHTML>=seat){


  var less =wallet.innerHTML-Number(seat)
  console.log(less)
  localStorage.setItem("amount",JSON.stringify(less))
  var moneys=JSON.parse(localStorage.getItem("amount"))
   wallet = document.querySelector("#wallet")
 wallet.innerHTML=moneys
 alert("Booking successful!")
}
else{
  alert("insufficient money")
}
}


