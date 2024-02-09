const options ={  year:'numeric'};
const span1= document.getElementById("currentyear");
span1.textContent=new Date().toLocaleDateString('en-Us', options);

const span2= document.getElementById('lastmodification');
span2.textContent= document.lastModified;

const button = document.querySelector("#hamburgermenu");
const  list = document.querySelector("#hamburgerlist");
button.addEventListener( 'click', function(){
list.classList.toggle("open");
  button.classList.toggle("open");});