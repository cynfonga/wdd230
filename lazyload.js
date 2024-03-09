const options={ year:"numeric"};
span1= document.querySelector("#year");

span1.innerHtml= new Date().toLocaleDateString("en-US",options);
const span2= document.querySelector("#lastmodification");
span2.innerHTML=document.lastModified;