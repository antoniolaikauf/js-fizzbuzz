// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?:faccia_nerd:
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

// creazione variabile contenente contenitore 
const contenitore= document.getElementById("contenitore");
// console.log(contenitore);

// creazione 100 square con loop for 
for (let i = 1; i <= 100; i++) {
    // console.log(i);
    // creazione dei div con classe square
    let square=document.createElement("div");
    // console.log(square);
    // aggiunta classe dentro css a square
    square.classList.add("js-square");
    // selezione square in base ai loro numeri
    if (i % 3 === 0 && i % 5 === 0) {
        square.append("fizzbuzz")
        square.classList.add("js-squarefizzbuzz")
    } else if (i % 5 === 0) {
        square.append("buzz")
        square.classList.add("js-squarebuzz")
    } else if (i % 3 === 0) {
        square.append("fizz")
        square.classList.add("js-squarefizz")
    } else{
        square.append(i);
    }
    // inserimento di square dentro container html
    contenitore.append(square);
    // valore mostrato all'evento click
    square.addEventListener("click", function(){
        let contenitoreRisultato = document.createElement("div")
        let risultato;
        if (i % 3 === 0 && i % 5 === 0) {
            risultato= "fizzbuzz";
        } else if (i % 5 === 0) {
            risultato= "buzz";
        } else if (i % 3 === 0) {
            risultato="fizz";
        } else{
            risultato= i;
        }
        contenitoreRisultato.append(risultato)
        // console.log(contenitoreRisultato);
        document.getElementById("testo").append(contenitoreRisultato)
    })
}





