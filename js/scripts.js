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

// alert("This is the sentence you put: " (sentenceArray));
        
        let charArray = [];
        sentenceArray.forEach(function(word) {
          wordChars = word.split('');
          charArray.push(wordChars);
            if (word.length === 1) {
              word = word + "yay"
              alert("If statement reached. This is the new word: " + word);
              return word;
              }
            else if {
              for (index = 0, index < 2, index ++) {
                if (vowels.includes(charArray[index])) {
                  alert("Word contains vowels");
                }
              }
            }
            else {
                return word;
            }
          });
          charArray;
          
            
        $("#result").append(sentenceArray); 
    });
})
