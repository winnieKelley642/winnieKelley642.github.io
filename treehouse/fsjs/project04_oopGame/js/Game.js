/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* 
 * Create Game class methods for start and end games
 * handling interactions
 * getting a random phrase
 * checking for win
 * removing a life from the scoreboard*/

 //create a 
 class Game{
    constructor(){
        //track number of missed guessess
        this.missed = 0;
        //array of phrase objects
        this.phrases = this.createPhrases();
        //current phrase object that is being used
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game */
    createPhrases() {
        let phrases = [
            new Phrase(`zombies`),
            new Phrase(`vampires`),
            new Phrase(`wearwolves`),
            new Phrase(`demon`),
            new Phrase(`count dracula`)
        ]
        return phrases;
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(){
        //store previous random number to eliminate repeated random phrase
        let previousRandomNumber;
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        console.log(randomNumber);
        if(previousRandomNumber != randomNumber){
            previousRandomNumber = randomNumber;
            let randomPhrase = this.phrases[randomNumber];
            return randomPhrase;
        }
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        //hide #overlay div
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';
        
        //store selected phrase into 'activePhrase'
        //calls the getRandomPhrase method to select a Phrase object
        // const randomPhrase =  this.getRandomPhrase()
        // randomPhrase.addPhraseToDisplay()
        // this.activePhrase =  randomPhrase;
        this.activePhrase =  this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin() {
        console.log(`number of letters in phrase: ${this.phrases.length}`);
        const correctLetter = document.querySelectorAll('.hide');
        console.log(`correctLetter = ${correctLetter.length}`);
        const space = document.querySelectorAll('.space')
        if(correctLetter.length === 1 && space.length === 1){
            console.log(`you win`);
            this.gameOver(true);
            return true;
        }else if(correctLetter.length === 0){
            console.log('you win');
            this.gameOver(true);
            return true;
        }else{
            console.log(`haven't won yet`);
            return false;
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        //increase value of missed property:
        console.log(`missed start: ${this.missed}`);
        this.missed++;
        console.log(`missed end: ${this.missed}`);
        //get heart images:
        const heartImage = document.querySelectorAll('.tries img');
        console.log(heartImage.length);
        //remove a life from scoreboard
        if(this.missed > 0 && this.missed <= 5){
            heartImage[this.missed - 1].src = ('images/lostHeart.png');
        }
        //checks remaining lives:
        if(this.missed >= 5){
            this.gameOver(false);
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        console.log(`game over`);
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display= 'block';
        const gameOverMessage = document.querySelector('#game-over-message');
        
            gameOverMessage.textContent = (`Aw man! GAME OVER! You lost`);
            overlayDiv.className = ('lose');
            this.resetGame();

        //win
        if(gameWon === true){
            gameOverMessage.textContent = ("Yea Buddy! You Won!");
            overlayDiv.className = ('win');
            this.resetGame();
        }
    };

    /**
     * reset game after it's over
     */
    resetGame(){
        //set overlay back to normal
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.className = ('start');

        //remove all 'li' elements from Phrase 'ul'
        const ul = document.querySelector('ul');
        ul.textContent = '';

        //enable all onscreen keyboard buttons
        const keyRow = document.querySelectorAll('.keyrow');
        console.log(`keyRow length: ${keyRow.length}`);
        for(let i = 0; i < keyRow.length; i++){
            for(let j = 0; j < keyRow[i].children.length; j++){
                keyRow[i].children[j].disabled = false;
                keyRow[i].children[j].className = "key";
        }}

        //reset heart images:
        const heartImage = document.querySelectorAll('.tries img');
        heartImage.forEach(image =>{
            image.src = ('images/liveHeart.png');
        });

        //reset missed:
        this.missed = 0;
    }
    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        console.log(button);
        if(button.disabled){
            console.log(`in key pressed again`);
            return;
        }
        //disable button once selected
        button.disabled = true;       
        
        if(this.activePhrase.checkLetter(button)){
            this.activePhrase.showMatchedLetter(button);
            button.classList.add('chosen');
            if(this.checkForWin()){
                this.gameOver(true);
            }
        }else{
            button.classList.add('wrong');
            this.removeLife();
        }
    };
}