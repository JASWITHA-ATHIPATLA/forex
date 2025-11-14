const base_url="https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdown=document.querySelectorAll(".dropdown select");
for(select of dropdown){
  for(code in countryList){
   let newOption=document.createElement("option");
   newOption.innerText=code;
   newOption.value=code;
   select.append(newOption);
  }
}

let country1=document.querySelector(".country1");
let country2=document.querySelector(".country2");
let flagImg1=document.querySelector(".flagImg1");
let flagImg2=document.querySelector(".flagImg2");
let amount=document.querySelector(".amt");
country1.addEventListener("input", () => {
   const code = countryList[country1.value];
   flagImg1.src = `https://flagsapi.com/${code}/flat/64.png`;
});

country2.addEventListener("change", () => {
   const code = countryList[country2.value];
   flagImg2.src = `https://flagsapi.com/${code}/shiny/64.png`;
});
let currencyBtn=document.querySelector(".Exchange-currencyBtn");
currencyBtn.addEventListener("click",(event)=>{
   event.preventDefault();
   if(amount.value==="" || amount.value<1){
      amount.value="1";
   }
   const url=`${base_url}/${country1.value.toLowerCase()}/${country2.value.toUpperCase()}.json`;
   let response=fetch()
   let message=document.querySelector(".message");
   let multpy=(amount.value)*
   //message.innerHTML=`${}`
})