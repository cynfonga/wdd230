const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=bbce11179c3c2746bd2abd14c887665e'
//nst url ="http://api.openweathermap.org/geo/1.0/direct?q=Trier&limit=5&appid=bbce11179c3c2746bd2abd14c887665e"
const url="https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=bbce11179c3c2746bd2abd14c887665e"

async function apiFetch(){
    try{ const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        console.log(data);//
        displayResults(data);
} else{throw Error(await response.text());}}
catch(error){
 console.log(error);
}
}
apiFetch();

function displayResults(data){

currentTemp.innerHTML=`${data.main.temp}&deg;`
const iconsrc = ` https://openweathermap.org/img/w/${data.weather[0].icon}.png ` 
let desc = data.weather[0].description;
weatherIcon.setAttribute(`src`,  `${iconsrc}`);
weatherIcon.setAttribute(`alt`,`${desc}`);

captionDesc.textContent=`${desc}`;

}


