/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**
* Goals: I am going for Exceeds Expectation 
*/

var message = '';
var red;
var green;
var blue;

/*** 
 * `quotes` array 
***/

// Create an array of objects called 'quotes'
var quotes = [
  // Create objects for each quote with properties: quote, source, citation, year and tag (bonus)
  {
    quote: 'As soon as we started programming, we found to our surprise that it wasn\'t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
    source: 'Maurice Wilkens, designer of EDSAC ',
    citation: 'When Maurice Wilkens discovers debugging' ,
    year: 1949,
    tag: 'debugging'
  },
  {
    quote: 'Testing leads to failure, and failure leads to understanding.',
    source: 'Burt Rutan',
    citation: null,
    year: null,
    tag: null
  },
  
  {
    quote: 'Don\'t wait until you have a bug to step through your code.',
    source: 'Steve Maguire',
    citation: 'Chapter 4: Step Through Your Code, Writing Solid Code: Microsoft\'s Techniques for Developing Bug-Free C Programs.' ,
    year: 1993,
    tag: 'bug code'
  },
  
  {
    quote:'Everybody in this country should learn to program a computer... because it teaches you how to think.',
    source: 'Steve Jobs',
    citation: 'co-founder and CEO of Apple Inc',
    year: null,
    tag: null
  },
  
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: null,
    year: 2017,
    tag: null
  },
  
  {
    quote: 'Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is on essential skill to learn.',
    source: 'Stephen Hawking',
    citation: null, 
    year: null,
    tag: null
  },
  
  {
    quote: 'Everything around you that you call life was made up by people that were no smarter than you and you can change it, you can influence it, you can build your own things that other people can use. Once you learn that, you\'ll never be the same again.',
    source: 'Steve Jobs',
    citation: null,
    year: null,
    tag: 'life'
  }
];

/***
 * `getRandomQuote` function
***/

//Create a get random quote function called getRandomQuote here:
function getRandomQuote(){
  // Create a variable and store a random number between 0 and the array's length
  var randomNumber = Math.floor(Math.random() * quotes.length);

  //Testing purpose
  console.log(`random quote number : ${randomNumber}`);

  //get and return a random quote with the bracket notationa and random number
  return quotes[randomNumber];
}

/***
 * This is for exceeding expectations: Random background colour change
 * `generateRandomColor` function
***/

//Create a generateRandomColor function
function generateRandomColor(){
  //Create a variable to store the rgb colour
  var randomNumberForColor;

  //generate a random number between 0 and 255 to assign to red, green and blue
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);

  //Concatenate the three numbers to create a new rgb colour and store it in the randomNumberForColor variable
  randomNumberForColor = `rgb(${red}, ${green}, ${blue})`;

  //Testing purpose
  console.log(`new background colour: ${randomNumberForColor}`);

  //return the new rgb
  return randomNumberForColor;
}

/***
 * `calculateOppositeColor` function
 * So I do not have the best eye sight and the white font on the different background colours are very difficult for me to read. 
 * Also the chances are very low, but what the new background colour is white (255,255,255), then a new colour font would be needed.
 * So I looked up on Google how to create the opposite colour (255 - the colour generated). I thought about using black font, but then the problem of generating a black background is still a possibility.
 */

 // Create a calculateOppositeColor function
 function calculateOppositeColor(){
   // Create a variable to store the rgb colour
   var oppositeColor;
   red = 255 - red;
   green = 255 - green;
   blue = 255 - blue;

   // Concatenate the three numbers to create a new rgb colour and store it in the oppostieColor variable
   oppositeColor = `rgb(${red}, ${green}, ${blue})`;
   
   //Testing purpose
   console.log(`New font colour: ${oppositeColor}`);

   //return this rgb to update the font colour
   return oppositeColor;
 }
/***
 * `printQuote` function
***/

//Create printQuote function here:
function printQuote(){
  //get the quote object using the getRandomQuote function that is already created.
  var chosenQuote = getRandomQuote();

  //get the new rgb from generateRandomColor function 
  var newBackgroundColor = generateRandomColor();
  
  //get the rgb from calculateOppositeColor function
  var newFontColor = calculateOppositeColor();

  //if the object has the property, it will display the information
  //instructions for this project wants the first two elements (quote and source) to be with <p> tag and leaving the second one without </p>
  if (chosenQuote.quote){
    message = `<p class = "quote"> ${chosenQuote.quote} </p>`;
  }
  if (chosenQuote.source){
    message += `<p class = "source"> ${chosenQuote.source}`;
  }

  //instructions wants the rest to be concatenate with a <span></span> 
  if (chosenQuote.citation){
    message += `<span class = "citation"> ${chosenQuote.citation}`;
  }
  if (chosenQuote.year){
    //the instructions wants the </p> tag to be After the two if statements, concatenate the closing </p> 
    message += `<span class = "year"> ${chosenQuote.year} </p>`;
  }
  if (chosenQuote.tag){
    message += `<p> ${chosenQuote.tag}</p>`;
  }
  //change the quote to the randomly selected quote
  document.getElementById('quote-box').innerHTML = message;  

  //change the background colour on click of the button
  document.body.style.backgroundColor = newBackgroundColor;

  //change the font colour on click of the button
  document.body.style.color = newFontColor;
}

/***
 * This is for the exceed expectations grade: Auto-refresh
 */

 //Setting timer to call the printQuote function so it generates a new quote and new background and text colour every 10 seconds.
 setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);