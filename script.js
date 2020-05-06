var popup = document.querySelector(".write-popup");
var loginLink = document.querySelector(".write");
var loginClose = document.querySelector(".close-btn")
var diliverLink = document.querySelector(".diliver")
var diliverItem = document.querySelector("#dilivery")
var diliverDes = document.querySelector(".delivery-des")
var guaranteeLink = document.querySelector(".guarantee")
var guaranteeItem = document.querySelector("#guarantee")
var guaranteeDes = document.querySelector(".guarantee-des")
var creditItem = document.querySelector("#credit")
var creditDes = document.querySelector(".credit-des")
var features = document.querySelector(".features")
 
loginLink.addEventListener("click", function(e){
  e.preventDefault();
  popup.classList.add("modal-show");
})
loginClose.addEventListener("click", function(e){
  e.preventDefault();
  popup.classList.remove("modal-show")
})

guaranteeLink.addEventListener("click", function(e){
  console.log(guaranteeItem);
  e.preventDefault();

  guaranteeItem.focus();
  features.scrollIntoView()
})
guaranteeItem.addEventListener("focus" , function(){
  diliverDes.classList.add('hide-des');
  diliverDes.classList.remove('show-des');
  creditDes.classList.add('hide-des');
  creditDes.classList.remove('show-des');
  guaranteeDes.classList.add('show-des');
  guaranteeDes.classList.remove('hide-des');
})
diliverItem.addEventListener("focus" , function(){
  diliverDes.classList.add('show-des');
  diliverDes.classList.remove('hide-des');
  creditDes.classList.add('hide-des');
  creditDes.classList.remove('show-des');
  guaranteeDes.classList.add('hide-des');
  guaranteeDes.classList.remove('show-des');
})
creditItem.addEventListener("focus" , function(){
  creditDes.classList.add('show-des');
  creditDes.classList.remove('hide-des');
  diliverDes.classList.add('hide-des');
  diliverDes.classList.remove('show-des');
  guaranteeDes.classList.add('hide-des');
  guaranteeDes.classList.remove('show-des');
})
guaranteeItem.addEventListener("click" , function(e){
  e.preventDefault();
  diliverDes.classList.add('hide-des');
  diliverDes.classList.remove('show-des');
  creditDes.classList.add('hide-des');
  creditDes.classList.remove('show-des');
  guaranteeDes.classList.add('show-des');
  guaranteeDes.classList.remove('hide-des');
})
diliverItem.addEventListener("click" , function(e){
  e.preventDefault();

  diliverDes.classList.add('show-des');
  diliverDes.classList.remove('hide-des');
  creditDes.classList.add('hide-des');
  creditDes.classList.remove('show-des');
  guaranteeDes.classList.add('hide-des');
  guaranteeDes.classList.remove('show-des');
})
creditItem.addEventListener("click" , function(e){
  e.preventDefault();

  creditDes.classList.add('show-des');
  creditDes.classList.remove('hide-des');
  diliverDes.classList.add('hide-des');
  diliverDes.classList.remove('show-des');
  guaranteeDes.classList.add('hide-des');
  guaranteeDes.classList.remove('show-des');
})