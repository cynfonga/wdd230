const options={ year:'numeric'};
const span1= document.getElementById('currentyear');
span1.textContent= new Date().toLocaleDateString('en-Us',options);

const span2= document.getElementById('lastmodification');

span2.textContent= document.lastModified;

const button= document.getElementById('burgerbutton');
const list=document.getElementById('burgermenu')

function toggleMenu(){

   list.classList.toggle('open');
   button.classList.toggle('open');
}

button.onclick= toggleMenu;
