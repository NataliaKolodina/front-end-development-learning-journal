// 6-11_JS,Advanced-Objects,Setters
/* ======================================
ESERCIZIO 1: Impostare un’età valida
1. Crea un oggetto `user` con una proprietà `_age` inizializzata a 25.
2. Aggiungi un setter `age` che:
   - accetta solo valori di tipo number
   - assegna il nuovo valore a `_age` se valido
   - stampa 'Invalid age value' se il tipo è diverso da number
3. Imposta `user.age = 30`, poi stampa `user._age`. // Risultato atteso: 30
4. Imposta `user.age = 'trenta'`. // Risultato atteso: Invalid age value
5. Stampa `user._age` di nuovo. // Risultato atteso: 30
====================================== */


/* ======================================
ESERCIZIO 2: Controllo di lunghezza del titolo
1. Crea un oggetto `movie` con una proprietà `_title` impostata a 'Matrix'.
2. Aggiungi un setter `title` che:
   - accetta solo stringhe lunghe almeno 4 caratteri
   - stampa 'Titolo non valido' se la lunghezza è inferiore
   - assegna il nuovo valore a `_title` se valido
3. Imposta `movie.title = 'Up'`. // Risultato atteso: Titolo non valido
4. Stampa `movie._title`. // Risultato atteso: Matrix
5. Imposta `movie.title = 'Inception'`, poi stampa `movie._title`. // Risultato atteso: Inception
====================================== */


const user = {
   _age: 25,
   set age(value) {
      if(typeof value === 'number') {
         this._age = value;
      } else {
         console.log('Invalid age value');
      }
   }
}
user.age = 30;
console.log(user._age);
user.age = 'trenta';
console.log(user._age);