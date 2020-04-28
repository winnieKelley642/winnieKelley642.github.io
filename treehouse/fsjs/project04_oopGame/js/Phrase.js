/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /*
 *create a Phrase class
 * hanndles the creation of phrases*/

 //create a Phrase class
 class Phrase{
    constructor(phrase){
        //setting phrase to all lower case letters
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
   addPhraseToDisplay() {
       //display the number of letters in the activePhrase, each letters gets a box
       //store the phrase div
       const phraseDiv = document.querySelector('#phrase');
       const ul = phraseDiv.firstElementChild;
    //    console.log(ul);

       //create a loop to go through the number of leters in the activePhrase
    //    console.log(`active phrase has ${this.phrase.length} letters`);

       for(let i = 0; i < this.phrase.length; i++){
        //    console.log(`in for loop`);
           //create li elements
           const li = document.createElement('li');
           ul.appendChild(li);

           //if there is a space
           if(this.phrase.charAt(i) === ' '){
               li.setAttribute('class', `hide space`);
           } else{
               li.setAttribute('class', `hide letter ${this.phrase.charAt(i)}`);
               li.textContent = this.phrase.charAt(i);
           }
       };
   };

   /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
   
   checkLetter(letter) {
    //    console.log(`in checkLetter()`);
    //    console.log(`letter clicked: ${letter.textContent}`);
    //    console.log(`phrase is: ${this.phrase}`);
       const selectedPhrase = this.phrase;
    //    console.log(`selected phrase is: ${selectedPhrase}`);
       let selectedLetter = letter.textContent;
    //    console.log(`letteris: ${selectedLetter}`);

       //check to see if letter is included in the phrase
    //    console.log(`checkLetter: ${selectedPhrase.includes(selectedLetter)}`);
       return selectedPhrase.includes(selectedLetter);
   }

   /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
   showMatchedLetter(letter) {
       const matchLetterElement = document.querySelectorAll('.letter');
       matchLetterElement.forEach(letterElement =>{
        //    console.log(letterElement);
        //    console.log(letterElement.textContent);
           if(letterElement.innerHTML === letter.textContent){
               letterElement.classList.remove('hide');
               console.log(letterElement);
               letterElement.classList.add('show');
           }
       });
   };
}