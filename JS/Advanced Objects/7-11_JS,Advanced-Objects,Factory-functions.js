// 7-11_JS,Advanced-Objects,Factory-functions
/* ======================================
ESERCIZIO 1: Creare robot con funzione fabbrica
1. Scrivi una funzione `robotFactory` che accetta quattro parametri: `id`, `model`, `energyLevel`, `speakMessage`.
2. La funzione deve restituire un oggetto con queste proprietà:
   - `id`: uguale al parametro `id`
   - `model`: uguale al parametro `model`
   - `energyLevel`: uguale al parametro `energyLevel`
   - `speak`: un metodo che stampa il valore di `speakMessage`
3. Usa `robotFactory` per creare un robot con valori: 101, 'XR-22', 80, 'Mission ready!'.
4. Salva il risultato in una costante `robot1`.
5. Chiama `robot1.speak()`. // Risultato atteso: Mission ready!
6. Stampa `robot1.energyLevel`. // Risultato atteso: 80
====================================== */

/* ======================================
ESERCIZIO 2: Creare un secondo robot con parametri diversi
1. Usa `robotFactory` di nuovo per creare un altro robot con valori: 202, 'MK-9', 45, 'Low battery...'.
2. Salva il risultato in una costante `robot2`.
3. Chiama `robot2.speak()`. // Risultato atteso: Low battery...
4. Stampa `robot2.model`. // Risultato atteso: MK-9
5. Stampa `robot2.id`. // Risultato atteso: 202
====================================== */

const robotFactory = (id, model, energyLevel, speakMessage) => {
   return {
      id: id,
      model: model,
      energyLevel: energyLevel,
      speak() {
         console.log(speakMessage);
      }
   }
}
const robot1 = robotFactory(101, 'XR-22', 80, 'Mission ready!');
robot1.speak();
console.log(robot1.energyLevel);