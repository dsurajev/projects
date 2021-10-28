/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const output = document.getElementById("output");
fetch(ENDPOINT)
.then(res => res.json())
.then((data) => {
    data.forEach(printCarObjects);
})
.catch((err) => console.log(err));

function printCarObjects(carObject) {
    const div = document.createElement("div");
    div.style.border = '2px solid blue'
    div.style.backgroundColor = 'cyan'; 
    div.style.margin = '5px';

    const carType = document.createElement("h1");
    carType.style.color = 'white';
    carType.style.padding = '5px';
    carType.style.marginTop = '0';
    carType.style.textAlign = 'center';
    carType.textContent = carObject.brand;

    const ul = document.createElement("ul");
    ul.style.padding = '10px';
    carObject.models.forEach(model => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        
        li.textContent = model;
        ul.append(li);
    });

    div.append(carType, ul);
    output.append(div);   
}