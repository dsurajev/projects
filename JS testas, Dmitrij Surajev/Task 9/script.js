/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite ojektų konstruktorių "Movie" (naudokte ES6), kuris sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
const movie = {
    Title: "Inception",
    director: "Nolan",
    budget: 100000001,
    wasExpensive: function(movieBudget) {
        if(this.budget > 100000000) {
            console.log(true)
        } else {console.log(false)}
        }
     
    }

    movie.wasExpensive();