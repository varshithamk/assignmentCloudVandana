const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", function(sentence) {
  const reversedSentence = reverseWords(sentence);
  console.log("Reversed sentence: " + reversedSentence);
  rl.close();
});

function reverseWords(sentence) {
  let words = [];
  let wordStart = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' || i === sentence.length - 1) {
      // Found the end of a word, reverse and add it to the array
      const wordEnd = i === sentence.length - 1 ? i : i - 1;
      words.push(reverseWord(sentence, wordStart, wordEnd));
      wordStart = i + 1;
    }
  }

  return words.join(' ');
}

function reverseWord(sentence, start, end) {
  let reversed = '';

  for (let i = end; i >= start; i--) {
    reversed += sentence[i];
  }

  return reversed;
}
