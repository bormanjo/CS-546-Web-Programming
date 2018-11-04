(function() {
    function stripSpecialChars(text){
        /* A function that strips special chars from the given text (only alpha-numeric characters remain) */
    
        // use regular expression to strip non alpha-numerics by replacing with ""
        return text.replace(/[\W_]+/g, "");
    }
    
    function isPalindrome(text){
        /* Given a string of text, checks whether the alphanumeric characters in the string comprise a palindrome or not */
    
        var text = stripSpecialChars(text);
    
        if (text === ""){
            return false;
        }
    
        text = text.toLowerCase();
    
        // start i at beginning, j at end and step inward
        for(i = 0, j = text.length - 1; i < j; i++, j--){
            if(text.charAt(i) !== text.charAt(j)){  // compare chars at i and j 
                return false;                       // if chars don't match, not palindrome
            }
        }
    
        return true;                                // All chars match, palindrome
    }

    var attempts  = [];

    const staticForm = document.getElementById("static-form");
  
    if (staticForm) {
        // Get the text submitted to the text area id'd by 'phrase'
        const phraseElement = document.getElementById("phrase");
  
        // Define the error container
        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName( "text-goes-here")[0];

        // Define the result container
        const resultContainer = document.getElementById("result-container");
        const resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];
  
        // When the submit button is clicked
        staticForm.addEventListener("submit", event => {
            event.preventDefault();
  
            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");
  
                //Get the value passed to phrase
                const submitted_phrase = phraseElement.value;

                // Check that something was provided
                if (submitted_phrase === ""){
                    throw "No text provided"
                }

                // add to the attempts list
                attempts.push(submitted_phrase);

                // Check palindrome status
                const status = isPalindrome(submitted_phrase);
  
                // Set text
                resultTextElement.textContent = "Palindrome status: " + status + "\nsubmission list: \n" + attempts.toString();
                
                // Remove hidden attribute and assert the default textElement class
                resultContainer.classList.remove("hidden");
                resultTextElement.classList = "text-goes-here"

                if(status){
                    resultTextElement.classList.add("is-palindrome");   // Assign the 'is-palindrome' class
                } else {
                    resultTextElement.classList.add("not-palindrome");  // Assign the 'not-palindrome' class
                }

            } catch (e) {
                // Print error text
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();