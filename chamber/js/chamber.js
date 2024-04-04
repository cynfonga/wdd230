const options={year:'numeric'};
const span1= document.getElementById('currentyear');
span1.textContent= new Date().toLocaleDateString('en-Us',options);

const span2= document.getElementById('lastmodification');

span2.textContent= document.lastModified;

const button= document.querySelector('#menu');
const list= document.querySelector('.menulist');

button.addEventListener('click',()=>{

   list.classList.toggle('open')
   button.classList.toggle('open')
})

