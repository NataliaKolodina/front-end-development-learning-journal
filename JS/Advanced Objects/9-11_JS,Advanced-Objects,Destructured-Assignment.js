// 9-11_JS,Advanced-Objects,Destructured-Assignment
/* ======================================
ESERCIZIO 1: Destructuring di proprietà principali
1. Crea un oggetto chiamato `wizard` con le seguenti proprietà:
   - name: 'Merlino'
   - realm: 'Avalon'
   - powers: un oggetto con due proprietà:
     - main: 'illusioni'
     - support: 'teletrasporto'
2. Usa il destructured assignment per estrarre la proprietà `realm` in una variabile.
3. Stampa la variabile ottenuta. // Risultato atteso: Avalon
====================================== */
/* ======================================
ESERCIZIO 2: Destructuring di proprietà annidate
1. Usa il destructured assignment per estrarre la proprietà `main` da `wizard.powers`.
2. Stampa la variabile `main`. // Risultato atteso: illusioni
3. Estrai anche `support` da `wizard.powers` usando la stessa tecnica.
4. Stampa la variabile `support`. // Risultato atteso: teletrasporto
====================================== */

const wizard = {
  name: "Merlino",
  realm: "Avalon",
  powers: {
    main: "illusioni",
    support: "teletrasporto",
  },
};
const { realm } = wizard;
console.log(realm);
const { main, support } = wizard.powers;
console.log(main);
console.log(support);
