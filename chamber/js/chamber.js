const options={year:'numeric'};
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

//dark mode

const modeButton =document.querySelector("#mode");
const section =document.querySelector(" section");
modeButton.addEventListener('click' , function(){
   if (modeButton.textContent.includes("☀")){
      section.style.background='#000';
      section.style.color='#fff';
      modeButton.textContent='☼';}
      else{
         section.style.background="aliceblue"
         section.style.color="#000"
         modeButton.textContent=" ☀"
      }
   }
)
