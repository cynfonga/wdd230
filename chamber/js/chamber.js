const options={ year:'numeric'};
const span1= document.getElementById('currentyear');
span1.textContent= new Date().toLocaleDateString('en-Us',options);

const span2= document.getElementById('lastmodification');

span2.textContent= document.lastModified;

function toggleMenu(){

    document.getElementById('burgermenu').classList.toggle('open');
}
const button= document.getElementById('burgerbutton');
button.onclick= toggleMenu;
