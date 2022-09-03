//all constants are decleared here
const selectCurrency = document.querySelectorAll(".countryCurrency");
const press = document.getElementById("check");
const leftSpace=document.getElementById("inputAmount");
const rightSpacre = document.getElementById("result");

//api call
fetch("https://api.frankfurter.app/currencies")
.then((data)=> data.json()).then((data) => {display(data)});

//main functions
function display(data){
    const fetchedData=Object.entries(data);
  for(let i=0;i<fetchedData.length;i++){
    selectCurrency[0].innerHTML+=`<option value="${fetchedData[i][0]}">${fetchedData[i][0]}</option>`;
    selectCurrency[1].innerHTML+=`<option value="${fetchedData[i][0]}">${fetchedData[i][0]}</option>`;
  }  
}
press.addEventListener("click",()=>{
    let currency1 = selectCurrency[0].value;
    let currency2 = selectCurrency[1].value;
    let value= leftSpace.value;
    if(currency1 != currency2){
        exchange(currency1,currency2,value);
    }
    else{
        alert("you have to choose two different currencies");
    }
})

function exchange(currency1,currency2,value){
    const link = "api.frankfurter.app";
    fetch(`https://${link}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((val)=>val.json()).then((val)=>{
        rightSpacre.value=Object.values(val.rates)[0];
    });
}