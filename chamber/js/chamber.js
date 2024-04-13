const options={year:'numeric'};
const span1= document.getElementById('currentyear');
span1.textContent= new Date().toLocaleDateString('en-Us',options);

const span2= document.getElementById('lastmodification');

span2.textContent= document.lastModified;

const button= document.querySelector('#menu');
const list= document.querySelector('.menulist');

button.addEventListener('click',()=>{

   list.classList.toggle('open');
   button.classList.toggle('open');
})


const main = document.querySelector('main');
const modebutton = document.querySelector('#mode');
modebutton.addEventListener('click',()=>{
   if (modebutton.textContent.includes("⚫")){
      main.style.background='#000';
      main.style.color='#fff';
      modebutton.textContent="🟡";
   }

   else{
      main.style.background='#fff';
      main.style.color='#000';
      modebutton.textContent="⚫";
   }
})

 const url="../js/data/members.json";
 const cards = document.querySelector('#cards')

 async function getMembersData(){
   const response = await fetch(url);
   const data = await response.json();
   displayMembers(data.members);
 }

 getMembersData();
