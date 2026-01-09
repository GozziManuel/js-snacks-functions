/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function vocalFinder() {
  let arrayList = [];
  let contatore = 0;
  for (let i = 0; i < word.length; i++) {
    const letterCounter = word[i];
    console.log(letterCounter);
    if (
      letterCounter === "a" ||
      letterCounter === "e" ||
      letterCounter === "i" ||
      letterCounter === "o" ||
      letterCounter === "u"
    ) {
      arrayList.push(letterCounter);
      contatore++;
    }
  }
  console.log(contatore + " " + arrayList.join(", "));
}

// Invoca la funzione qui e stampa il risultato in console
vocalFinder();
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
