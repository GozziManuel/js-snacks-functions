/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstLetter() {
  const myLetters = [];
  for (let i = 0; i < names.length; i++) {
    const letter = names[i];
    myLetters.push(letter[0]);
  }
  console.log(myLetters);
  return myLetters;
}

// Invoca la funzione qui e stampa il risultato in console
firstLetter();
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
