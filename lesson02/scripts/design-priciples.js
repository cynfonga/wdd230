const options={ year:'numeric'};
const span1= document.getElementById('lastupdate');
span1.textContent= new Date().toLocaleDateString('en-US', options);


const span2= document.getElementById('lastmodification');
span2.textContent= document.lastModified;