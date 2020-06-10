$(document).ready(function() {
    $("form#pig-latin").submit(function(event) {
        event.preventDefault();

        let sentence = $("input#sentence").val();

        if (!sentence) {
          alert("Please enter a sentence before clicking submit.");
          return false;
        }
        
//Business Logic

        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]

        sentenceArray = sentence.split(" "); 

        alert(sentenceArray);
        
        let charArray = [];
        sentenceArray.forEach(function(word) {
          wordChars = word.split('');
          charArray.push(wordChars);
            if (word.length === 1) {
              // alert(word + " if statement reached successfully");
              word = word + "yay"
              alert("This is the new word: " + word);
              return word;
              }
            else if (word.length>1 && vowels.includes(word.charAt[0]) {  
                word = word + "way"
                alert("Else statement reached. This is the new word: " + word);
                return word;
              }
            
          
          });
          charArray;
          
            //if (vowelArray.includes(sentenceArray[index]))
            
            
        $("#result").append(sentenceArray);   //Results section
        

    });
})

// get input sentence from user, split sentence into an array of words, for each word element split into separate characters, 

// keep punctuation and sentence structure