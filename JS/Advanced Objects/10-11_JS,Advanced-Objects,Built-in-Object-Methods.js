// 10-11_JS,Advanced-Objects,Built-in-Object-Methods
/* ======================================
ESERCIZIO 1: Verifica delle proprietà con .hasOwnProperty() e accesso ai valori con .valueOf()
1. Crea un oggetto chiamato `robot` con le seguenti proprietà:
   - model: 'RX-78'
   - energyLevel: 85
2. Usa il metodo .hasOwnProperty() per verificare se l’oggetto ha una proprietà chiamata `model`. 
3. Stampa il risultato nel terminale. // Risultato atteso: true
4. Usa il metodo .hasOwnProperty() per verificare se esiste la proprietà `speed`.
5. Stampa il risultato. // Risultato atteso: false
6. Chiama il metodo .valueOf() sull’oggetto `robot`.
7. Stampa il risultato. // Risultato atteso: { model: 'RX-78', energyLevel: 85 }
====================================== */

/* ======================================
ESERCIZIO 2: Uso di Object.keys() e Object.entries()
1. Usa Object.keys() per ottenere tutte le chiavi dell’oggetto `robot`.
2. Stampa il risultato. // Risultato atteso: ['model', 'energyLevel']
3. Usa Object.entries() per ottenere un array di coppie chiave/valore dell’oggetto `robot`.
4. Stampa il risultato. // Risultato atteso: [['model', 'RX-78'], ['energyLevel', 85]]
5. Crea un nuovo oggetto `upgradedRobot` usando Object.assign().
   - Copia tutte le proprietà di `robot` in `upgradedRobot` e aggiungi una nuova proprietà:
     - upgraded: true
6. Stampa `upgradedRobot`. // Risultato atteso: { model: 'RX-78', energyLevel: 85, upgraded: true }
====================================== */

const robot = {
  model: "RX-78",
  energyLevel: 85,
};
const hasModel = robot.hasOwnProperty("model");
console.log(hasModel);
const hasSpeed = robot.hasOwnProperty("speed");
console.log(hasSpeed);
const robotValue = robot.valueOf();
console.log(robotValue);

const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotEntries = Object.entries(robot);
console.log(robotEntries);
const upgradedRobot = Object.assign({}, robot, { upgraded: true });
console.log(upgradedRobot);
