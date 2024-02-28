import {countries} from "./db/contriesList.js";

const selectCountry=document.querySelector(".container");
const countryContainer=document.querySelector(".country-container");
const countryList=document.querySelector(".country-list");
const input=document.querySelector(".input");

let searchVal="";

displayCountries(countries);


function displayCountries(countries){
    
    for(let country of countries){
        const name=document.createElement("p");
        name.classList.add("countries-name-list");
        name.innerText=country.country;
        countryList.appendChild(name);
    }
}
  

function inputHandler(event){
    searchVal=event.target.value.toLowerCase();
    const filteredList=countries.filter(({country})=>country.toLowerCase().startsWith(searchVal));
    countryList.innerHTML="";
    displayCountries(filteredList);
}


input.addEventListener("keyup", inputHandler);


selectCountry.addEventListener("click", (event)=>{
    countryContainer.classList.toggle("hide");

    



})