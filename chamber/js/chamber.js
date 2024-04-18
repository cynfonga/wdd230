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

 const url="https://cynfonga.github.io/wdd230/chamber/data/members.json";
 const cards = document.querySelector('#cards')

 async function getMemberData(){
   const response = await fetch(url);
   const mydata = await response.json();
   displayMembers(mydata.companies);
 }

 getMemberData();

 const displayMembers = (companies) => {
   companies.forEach(function(company){
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // fill in the blank
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${company.name} `; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src',company.image);
      portrait.setAttribute('alt', `Portrait of ${company.name} `); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '40');
      portrait.setAttribute('height', '50');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }


 let visitDisplay= document.querySelector('#today');
 let todayVisit = localStorage.getItem('dayls');

 if (todayVisit==new Date()) {
   visitDisplay.textContent= " welcome let us know if u have any questions";
 }

 localStorage.setItem('dayls',todayVisit);
  