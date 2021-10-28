/* ------------------------------ TASK 10 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti skaičių, kuris turi būti ne mažiau 1, ir ne daugiau 9 (1-9 imtinai)

Jeigu įvesta neteisinga vertė - atsiranda "error" žinutė ir prašoma įvesti skaičių nuo 1 iki 9.
Error atvaizdavimas bloke - <div class="error">

Jeigu įvesta vertė tiko - nusispalvina to skaičiaus langelis lentelėje. 

Įvedus naują tinkantį skaičių, nusispalvina naujas atitinkamo skaičiaus
 langelis, o senas vėl tampa baltas.

Jeigu norite, galite naudotis turimu CSS, bet galite pasirašyti ir savo. 
-------------------------------------------------------------------------- */


const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', function () {
    event.preventDefault();
    if ((document.querySelector('.input').value) < 1 || (document.querySelector('.input').value) > 9) {
        document.querySelector('.error').style.visibility = 'visible';
        stopPropagation();
    }  if((document.querySelector('.input').value) = 1) {
        document.querySelector('.error').style.visibility = 'hidden'
        document.getElementById('1').style.backgroundColor = 'lightpink'
    }  if((document.querySelector('.input').value) = 2) {
        document.querySelector('.error').style.visibility = 'hidden'
        document.getElementById('2').style.backgroundColor = 'lightpink'
    }
})