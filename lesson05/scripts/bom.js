const input = document.querySelector('#favchap');

const list= document.querySelector('#list');

const button= document.querySelector('button');
button.addEventListener('click', function(){

const myItem= input.value;
input.value="";

const listItem=document.createElement('li');
const listText=document.createElement('span');
const listButton= document.createElement('button');

listItem.appendChild(listText);
listText.textContent=myItem
listItem.appendChild(listButton);
listButton.textContent="X";
list.appendChild(listItem);

listButton.addEventListener('click', function(){


list.removeChild(listItem)

});

input.focus();

})