const options ={  year:'numeric'};
const span1= document.getElementById("currentyear");
span1.textContent=new Date().toLocaleDateString('en-Us', options);

const span2= document.getElementById('lastmodification');
span2.textContent= document.lastModified;

const mybutton = document.querySelector("#hamburgermenu");
const  list = document.querySelector(".hamburgerlist");
mybutton.addEventListener('click', function(){
list.classList.toggle('open');
mybutton.classList.toggle('open');});
