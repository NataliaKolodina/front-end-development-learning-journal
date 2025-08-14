// 11-11_JS,Advanced-Objects,Review
/* ======================================
ESERCIZIO 1: Crea un oggetto con metodi, proprietà private e getter/setter
1. Crea un oggetto chiamato `user` con le seguenti proprietà:
   - _username: 'developer_01'
   - _password: 'abc123'
2. Aggiungi un metodo getter chiamato `username` che restituisce il valore di _username.
3. Aggiungi un metodo setter chiamato `password` che assegna un nuovo valore a _password solo se il nuovo valore è una stringa con almeno 6 caratteri. In caso contrario, stampa: 'Invalid password'
4. Aggiungi un metodo `login` che stampa "Access granted" se la password è 'abc123', altrimenti stampa "Access denied".
5. Usa il getter per ottenere il nome utente. // Risultato atteso: 'developer_01'
6. Usa il setter per cambiare la password in '123'. // Risultato atteso: 'Invalid password'
7. Cambia la password in 'newpass' con il setter.
8. Esegui il metodo `login`. // Risultato atteso: 'Access denied'
====================================== */
/* ======================================
ESERCIZIO 2: Usa una funzione fabbrica con shorthand e assegnazione destrutturata
1. Crea una funzione fabbrica chiamata `createDevice` che accetta i parametri: type, brand, batteryLevel.
2. La funzione deve restituire un oggetto con proprietà shorthand (type, brand, batteryLevel) e un metodo `status()` che stampa: "<type> by <brand> has <batteryLevel>% battery"
3. Crea un oggetto `phone` usando `createDevice` con i valori: 'Smartphone', 'Zeta', 77.
4. Esegui il metodo `status()` sul `phone`. // Risultato atteso: 'Smartphone by Zeta has 77% battery'
5. Usa l’assegnazione destrutturata per estrarre `brand` da `phone` e stampalo. // Risultato atteso: 'Zeta'
====================================== */


const user = {
   _username: 'developer_01',
   _password: 'abc123',
   get username() {
      return this._username;
   },
   set password(newPassword) {
      if (newPassword.length >= 6 && typeof newPassword === 'string') {
         this._password = newPassword;
      } else {
          console.log('Invalid password');
      }
   },
   login() {
      if (this._password === 'abc123') {
         console.log("Access granted");
      } else {
         console.log("Access denied");
      }
   }
};

username = user.username;
console.log(username); 

user.password = '123';
user.password = 'newpass';
user.login();




function createDevice(type, brand, batteryLevel) {
   return {
      type,
      brand,
      batteryLevel,
      status() {
         console.log("<type> by <brand> has <batteryLevel>% battery");
      }
   }
}
const phone = createDevice('Smartphone', 'Zeta', 77);
phone.status();
const { brand } =phone;
console.log(brand); 

