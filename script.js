/**
 * Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */
const userWord = prompt('Palindroma - Inserisci una parola');
palindromeWord(userWord);

function palindromeWord(word){

    let wordReverse = word.split("").reverse().join("");
    console.log(wordReverse);
    

    if (word === wordReverse) {
    console.log("La parola è palindroma ");
    } else {
    console.log("La parola non è palindroma");
}
}
/**
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */
let choice = false;
let userChoice = prompt('Pari o Dispari - Scegli pari o dispari');
while ( userChoice != 'pari' && userChoice != 'dispari' ){
    userChoice = prompt('Pari o Dispari - Scegli pari o dispari').toLowerCase().trim();
}
if (userChoice == "pari"){
    choice = true;
} else {
    userChoice = "dispari";
    choice=false;
}
console.log(userChoice);
console.log (choice);
let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(userNumber);
let computerNumber = randomInteger(1,5);
console.log(computerNumber);
sum = userNumber + computerNumber;
console.log(sum);
if (isEven(sum) && choice == true){
    console.log('Hai vinto tu');
} else if (!isEven(sum) && choice == false) {
    console.log('Hai vinto tu'); 

}else{
    console.log('Ha vinto il computer'); 
}

/**
 * Function that returns a random numer between two values (both included).
 *
 * @param {*} minimumValue The minimum value of the random number to be generated
 * @param {*} maximumValue The maximum value of the random number to be generated
 * @returns The randon generated number.
 */
 function randomInteger(minimumValue, maximumValue){
    if ( isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue)) ){
       console.error('randomInteger(min, max) needs two numbers as argument');
    }
    return ( Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));
 }
 
 
 /**
  * Function that checks if the given number is even.
  *
  * @param {*} number the number to check
  * @returns true if the number is even, false otherwise.
  */
 function isEven(number){
    return number % 2 === 0;
    // if ( number % 2 === 0 ){
    //    return true;
    // }
    // return false;
 }

