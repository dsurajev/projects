/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijas (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");

submitBtn.addEventListener('click', function() {
    event.preventDefault();
    document.getElementById('output').style.backgroundColor = "white";
    document.getElementById('output').style.padding = "10px";
    document.getElementById('output').style.width = "80%";
    document.getElementById('output').style.margin = "auto";
    document.getElementById('output').style.fontSize = "2em";
    const enteredValue = document.getElementById('search').value;
    const convertedValue = document.getElementById('output').value = `Your weight is ${enteredValue*2.2046} in pounds, ${enteredValue/ 0.0010000} in grams and ${enteredValue* 35.274} in ounces`;
    output.innerHTML = convertedValue;
})

