// My first program 
// it allows the user to give a word and the program will change it to an alert
let word = prompt('Give me a word');
// now i want a condition that says: the alert will only occur if the word has 6 characters or less
if (word.length < 7) {
    word = word + '!';
    word = word.toUpperCase();
    alert(word);
} else {
    alert('Your word has more than 6 characters')
}
