// 8-11_JS,Advanced-Objects,Property-Value-Shorthand
/* ======================================
ESERCIZIO 1: Refactoring con Property Value Shorthand
1. Scrivi una funzione `animalFactory` che accetta due parametri: `species` e `legs`.
2. La funzione deve restituire un oggetto che usa la property value shorthand per assegnare `species` e `legs`.
3. Crea una costante `giraffe` assegnandole il risultato della chiamata `animalFactory('Giraffa', 4)`.
4. Stampa `giraffe.species`. // Risultato atteso: Giraffa
5. Stampa `giraffe.legs`. // Risultato atteso: 4
====================================== */

/* ======================================
ESERCIZIO 2: Creare un secondo animale
1. Usa `animalFactory` per creare un nuovo oggetto animale con valori: 'Canguro', 2.
2. Salva il risultato in una costante `kangaroo`.
3. Stampa `kangaroo.species`. // Risultato atteso: Canguro
4. Stampa `kangaroo.legs`. // Risultato atteso: 2
====================================== */

function animalFactory(species, legs) {
  return {
    species,
    legs,
  };
}
const giraffe = animalFactory("Giraffa", 4);
console.log(giraffe.species);
console.log(giraffe.legs);

const kangaroo = animalFactory("Canguro", 2);
console.log(kangaroo.species);
console.log(kangaroo.legs);
