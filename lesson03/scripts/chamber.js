const spanyear= document.getElementById("myyear");
const options= { year:'numeric'};

spanyear.textContent= new Date().toLocaleDateString(options,'en-US');