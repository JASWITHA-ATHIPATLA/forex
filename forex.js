const url="https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";
const dropdown=document.querySelectorAll(".dropdown select");
for(select of dropdown){
  for(code in countryList){
   let newOption=document.createElement("option");
   newOption.innerText=code;
   newOption.value=code;
   select.append(newOption);
  }
}