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
let computerNumber = Math.floor(Math.random()*5 +1);
console.log(computerNumber);
sum = userNumber + computerNumber;
console.log(sum);
if (sum % 2 == 0 && choice == true){
    console.log('Hai vinto tu');
} else if (sum % 2 != 0 && choice == false) {
    console.log('Hai vinto tu'); 

}else{
    console.log('Ha vinto il computer'); 
}



