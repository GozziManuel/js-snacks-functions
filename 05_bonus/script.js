/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
let timer = new Date();
let hour = timer.getHours();
console.log(hour);
function clockTimer(username) {
  if (hour >= 13 && hour <= 17) {
    console.log("buon pomeriggio", username);
  } else if (hour >= 18) {
    console.log("buonsera", username);
  } else if (hour >= 0 && hour < 6) {
    console.log("buonsera", username);
  } else if (hour >= 6) {
    console.log("buongiorno", username);
  }
}
// Invoca la funzione qui e stampa il risultato in console
clockTimer(name);
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
