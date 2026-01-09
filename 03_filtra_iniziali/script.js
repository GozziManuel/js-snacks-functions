/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function detector(letter) {
  const pushArray = [];
  for (let i = 0; i < names.length; i++) {
    const index = names[i];
    const finder = index.indexOf(letter);
    if (finder == 0) {
      pushArray.push(index);
    }
  }
  console.log(pushArray);
  return pushArray;
}
// Invoca la funzione qui e stampa il risultato in console
detector("A");
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
