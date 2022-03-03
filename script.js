const userWord = prompt('Inserisci una parola');
palindromeWord(userWord);

function palindromeWord(word){

    let wordReverse = word.split("").reverse().join("");
    if (word === wordReverse) {
    console.log("La parola è palindroma ");
    } else {
    console.log("La parola non è palindroma");
}
}
