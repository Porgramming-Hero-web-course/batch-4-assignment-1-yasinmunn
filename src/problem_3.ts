
function countWordOccurrences(sentence: string, word: string): number {

const sentenceLowerCase = sentence.toLowerCase();
const wordLowerCase = word.toLowerCase();

const words = sentenceLowerCase.split(" ");

let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === wordLowerCase) {
    count++;
    }
}

return count;
}
