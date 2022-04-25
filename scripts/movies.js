// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


var arr = JSON.parse(localStorage.getItem("amount"))||[]
  wallet.innerHTML=arr
var inp =  document.querySelector("#search")
// inp.addEventListener("click",function(){
//   searchfunc()
// })

 async function   searchfunc(){
  var inputs =  document.querySelector("#search").value
  var item= await  fetch(`http://www.omdbapi.com/?t=${inputs}&apikey=db27256e`)
 var data =await item.json()
 console.log(data)
 appenffunc(data)
}


function appenffunc(data){
  if(data.Response=="True"){
   
var pic = document.createElement("img")
pic.setAttribute("src",data.Poster)

var title  =document.createElement("p")
title.innerHTML="Title"+data.Title;
var btn = document.createElement("button")
btn.innerHTML="booknow"
btn.setAttribute("class","book_now")
btn.addEventListener("click",function(){
  bookfunc(data)
})

document.querySelector("#movies").append(pic,title,btn)
    }
    }
var arr2= JSON.parse(localStorage.getItem("movie"))||[]
     function bookfunc(data){
console.log(data)
 arr2.push(data)
 localStorage.setItem("movie",JSON.stringify(arr2))
 window.location.href="./checkout.html"
     }



var timeid;


function debounce(func,delay){

if(timeid==true){
    clearTimeout(timeid)
}
var timeid=  setTimeout(function(){
    func()
},delay)
}

