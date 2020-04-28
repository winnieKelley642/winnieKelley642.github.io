/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Step 8 create event listener for "Start Game" button on page load
let game;
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', (e) =>{
    game = new Game();
    game.startGame();
});

//Step 9 when user clicks onscreen keyboard buttons:
//store what onscreenKey user pressed 
const onscreenKeyboard = document.querySelectorAll('.key');
for(let i = 0; i < onscreenKeyboard.length; i++){
    onscreenKeyboard[i].addEventListener('click', (e) =>{
        let onscreenKeyClicked = e.target;
        game.handleInteraction(onscreenKeyClicked);
    });
};

 //keyboard eventListener
window.addEventListener('keyup', userInput);
function userInput(e){
    //get .code, which will display the value of the key @sradms0 provided me with a very helpful article
    const userKeyboardInputCode = e.code.toLowerCase();
    // console.log(`user keyboard typed: ${userKeyboardInputCode}`);
    //get only the first three letters, so that I can check to make sure it is a 'key'
    const firstThreeLetters = userKeyboardInputCode.slice(0,3);
    // console.log(`last letter in code is: ${firstThreeLetters}`);
    if(firstThreeLetters === 'key'){
        const userKeyboardInput = userKeyboardInputCode[3];
        console.log(userKeyboardInput);
        const keyRow = document.querySelectorAll('.keyrow');
        // console.log(`keyRow length: ${keyRow.length}`);
        for(let i = 0; i < keyRow.length; i++){
            for(let j = 0; j < keyRow[i].children.length; j++){
                let passThisButton = keyRow[i].children[j];
                // console.log(passThisButton.textContent);
                //creating an array to make sure only react if a letter is clicked
                const validKeyboardButtons = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
                
                for(let x = 0; x <= validKeyboardButtons.length; x++){
                    if(userKeyboardInput === passThisButton.textContent && userKeyboardInput === validKeyboardButtons[x]){
                        if(game){
                            game.handleInteraction(passThisButton);
                        }
                    }
                }
            }
        }
    }
}