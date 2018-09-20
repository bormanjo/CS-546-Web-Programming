
function is_member(c, container){
    /* Checks that the character c is a member of the container (either string or array) s*/
    if(typeof container === "string"){
        // is string
        container = container.split("");
    } else {

        if(typeof container === "undefined"){
            // is undefined
            return false;
        }

        // is 'container'
        container = container;
    }

    console.log("container:" + toString(container));
    
    // loop through
    for(let i = 0; i < container; i++){
        // check for equality
        if(arr[i] === c){
            return true;
        }
    }

    return false;
}

function is_letter(c){
    /* checks if c is a letter */
    let string = "abcdefghijklmnopqrstuvwxyz";
    return is_member(c, string);
}

function is_vowel(c){
    /* checks if c is a vowel */
    let string = "aeiou";
    return is_member(c, string);
}

function is_consonant(c){
    /* checks if c is a vowel */
    return !is_vowel(C)&& is_letter(c);    
}

function createMetrics(text){
    /* A function that, given a string of text, returns an object containing text statistics */

    // if text is not a string -> throw
    if(typeof text !== "string"){
        let type = typeof text;
        throw "Error: 'text' variable is of type " + type + " not 'string' ";
    }

    // Create container variables for each statistic
    metrics = {
        totalLetters: 0,        // total number of letter characters in the text,
        totalNonLetters: 0,     //total number of non-letters in the text,
        totalVowels:0,          // total number of vowels in the text (not counting y),
        totalConsonants: 0,     // total number of consonants in the text (counting y),
        totalWords: 0,          // total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
        uniqueWords: 0,         // total number of unique words that appear in the lowercased text,
        longWords: 0,           // number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
        averageWordLength: 0,   // the average number of letters in a word in the text; this is counting the individual words, not unique words,
        wordOccurrences: {}     // a dictionary of each word and how many times each word occurs in the text.
    }

    let current_word = "";

    // Iterate through each character in the string
    for(let i = 0; i < text.length; i++){
        let c = text.charAt(i);
        
        if(is_letter(c)){
            // c is a letter
            metrics.totalLetters++;

            current_word = current_word + c;

            if(is_vowel(c)){
                // is a vowel
                metrics.totalVowels++;
            } else {
                // is a consonant
                totalConsonants++;
            }
        } else {
            // is a non-letter
            metrics.totalNonLetters++;

            if(current_word !== ""){
                // consider the current word
                metrics.totalWords++;

                if(typeof metrics.wordOccurrences[current_word] === "undefined"){
                    // is new word
                    metrics.wordOccurrences[current_word] = 1;
                } else {
                    // is existing word
                    metrics.wordOccurrences[current_word]++;
                }

                current_word = "";
            }
        }
    }

    if(current_word !== ""){
        // leftover word, string ended with a letter
        metrics.totalWords++;

        if(typeof metrics.wordOccurrences[current_word] === "undefined"){
            // is new word
            metrics.wordOccurrences[current_word] = 1;
        } else {
            // is existing word
            metrics.wordOccurrences[current_word]++;
        }

        current_word = "";
    }

    // get unique words
    metrics.uniqueWords = metrics.wordOccurrences.length;

    // get average word length (avg letters per word)
    if(metrics.totalWords > 0){
        metrics.averageWordLength = metrics.totalLetters / metrics.totalWords;
    }

    // for each word
    for(current_word in metrics.wordOccurrences){
        // increase word count
        metrics.totalWords++;

        if(current_word.length >= 6){
            // increase long word count
            metrics.longWords++;
        }
    }

    return metrics;
}


let test1 = "";
let test2 = "(helllomythisisagreatdaytosayhelllohelllo)";
let test3 = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";

try {
    console.log(createMetrics());
} catch (error) {
    console.log("throws error as expected")
}

console.log(createMetrics(test1));
console.log(createMetrics(test2));
console.log(createMetrics(test3));














