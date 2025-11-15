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
currencyBtn.addEventListener("click",async(event)=>{
   event.preventDefault();
   if(amount.value==="" || amount.value<1){
      amount.value="1";
   }
   const from = country1.value.toLowerCase();  // e.g. "usd"
   const to   = country2.value.toLowerCase();
   const url=`${base_url}/${from}.json`;
   //console.log(country1.value,country2.value.toLowerCase());
   let response= await fetch(url);
   let data= await response.json();
   //console.log(data);
   let rate=data[from][to];
   let result=Number(amount.value)*rate;
   console.log(result);
   let message = document.querySelector(".message");
    message.innerText = `${amount.value} ${country1.value} = ${result.toFixed(2)} ${country2.value}`;
})