const options ={  year:'numeric'};
const span1= document.getElementById("currentyear");
span1.textContent=new Date().toLocaleDateString('en-Us', options);

const span2= document.getElementById('lastmodification');
span2.textContent= document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
hambutton.addEventListener( 'click',() =>{
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});
