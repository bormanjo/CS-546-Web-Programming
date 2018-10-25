

function stripSpecialChars(text){
    /* A function that strips special chars from the given text (only alpha-numeric characters remain) */

    // use regular expression to strip non alpha-numerics by replacing with ""
    return text.replace(/[\W_]+/g, "");
}

function isPalindrome(text){
    /* Given a string of text, checks whether the alphanumeric characters in the string comprise a palindrome or not */

    text = stripSpecialChars(text);

    // start i at beginning, j at end and step inward
    for(i = 0, j = text.length - 1; i < j; i++, j--){
        if(text.charAt(i) !== text.charAt(j)){  // compare chars at i and j 
            return false;                       // if chars don't match, not palindrome
        }
    }

    return true;                                // All chars match, palindrome
}

module.exports = isPalindrome;