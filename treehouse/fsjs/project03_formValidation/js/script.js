'use strict'
//global variables:
const userInputName = document.querySelector('#name');
const userInputEmail = document.querySelector('#mail');
const otherJobRole = document.querySelector('#other-title');
const jobRoleSelection = document.querySelector('#title');
const listOfColors = document.querySelector('#color');
const design = document.querySelector('#design');
const activityList = document.querySelector('.activities');
const activities = document.querySelectorAll('.activities input');
const creditCardDiv = document.querySelector('#credit-card');
const payPalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
const paymentOption = document.querySelector('#payment');
const submitButton = document.querySelector('button');
const form = document.querySelector('form');
let total = 0;
const shirtSelectionDiv = document.querySelector('.shirt-box');
const creditCardNumber = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const getLabel = document.querySelectorAll('label');

//Add placeholders:
userInputName.placeholder = 'Please enter your name here';
userInputEmail.placeholder = 'Please enter a valid email';
creditCardNumber.placeholder = '3-16 digits card #';
zip.placeholder = '5 digits';
cvv.placeholder = '3 digits';

//1. Set focus on first text field when the page is loads.
    //1a. Should be focused by default
userInputName.focus();

/**
 * Job Role Selection
 * Note: You'll need to add the "Other" job role input directly into the HTML and hide it initially
 * with JS in order to get this feature to work when JS is disabled, which is a requirement below.
 */
//Do not display the other text field
otherJobRole.style.display = 'none';

//2. In the Job Role drop down menu, when "Other" is selected
//check for what the user selected
for(let i = 0; i < jobRoleSelection.length; i++){
    //add event listener to change of dropdown selection
    jobRoleSelection.addEventListener('change', (e) => {
        if(e.target.value === 'other'){
            //2a. Display text field
            otherJobRole.style.display = 'block';
        } else{
            //hide the text field if not 'other'
            otherJobRole.style.display = 'none';
        }
    });
}
    //2b. set text field id = "other-title" <-- done in html
    //2c. set placeholder to "Your Job Role" <-- done in html

/** 
 * T-Shirt Info
 */
//3. Hide colour options in the "Color" drop down list until theme is selected from "Design menu"
    //3b. set "Color" field to read "Please select a T-shirt theme"
/**exceed expectation
hide colour drop down list:
*/
const hideColorList = document.querySelector('#color');
hideColorList.hidden = true;
hideColorList.parentElement.hidden = true;

//set selectThemeFirstElement as what to display and hide the rest
listOfColors[0].hidden = true;
listOfColors[1].hidden = true;
listOfColors[2].hidden = true;
listOfColors[3].hidden = true;
listOfColors[4].hidden = true;
listOfColors[5].hidden = true;

//4. After theme is selected only display colour options that match the design selected in the "Design" menu.
    //4a. Theme - JS Puns = "Cornflower Blue", "Dark Slate Grey" and "Gold"
    //4b. Theme - I ♥ JS = "Tomato", "Steel Blue" and "Dim Grey"
    //4c. Update theme and colours as theme is selected.
//add event listener to design drop down menu
design.addEventListener('change', (e) =>{
    //if user selects selectTheme
    if(e.target.value === 'Select Theme'){
        hideColorList.hidden = true;
        hideColorList.parentElement.hidden = true;
    }
    //if user selects js puns
    if(e.target.value === 'js puns'){
        hideColorList.hidden = false;
        hideColorList.parentElement.hidden = false;
        listOfColors[0].selected = true;
        listOfColors[0].hidden = false;
        listOfColors[1].hidden = false;
        listOfColors[2].hidden = false;
        listOfColors[3].hidden = true;
        listOfColors[4].hidden = true;
        listOfColors[5].hidden = true;
    }
    //if user selects heart js
    if(e.target.value === 'heart js'){
        hideColorList.hidden = false;
        hideColorList.parentElement.hidden = false;
        listOfColors[3].selected = true;
        listOfColors[0].hidden = true;
        listOfColors[1].hidden = true;
        listOfColors[2].hidden = true;
        listOfColors[3].hidden = false;
        listOfColors[4].hidden = false;
        listOfColors[5].hidden = false;
    }
});

/**
 * Register for Activities section
 */
//5. Don't allow user to select a workshop that is at the same day and time as selected
    //5a. disable checkbox and visually indicate that it is not available. 
    //5b. when user uncheck a checkbox, make sure disabled checkboxes are enabled.
//6. When user clicks on an activity, a running total should display below the list
//set total to 0 to start, set this up before evenListener so that it can be called in the event listener.
const totalElement = document.createElement('p');
totalElement.textContent = (`Total Cost: $${total}`);
activityList.appendChild(totalElement);

//add event listener to checkbox:
activityList.addEventListener('change', (e)=>{
    let checked = e.target;
    let selectedDayTime = checked.getAttribute('data-day-and-time');

    //dissable and enabling the right activities
    for(let i = 0; i < activities.length; i++){
        let activityDayTime = activities[i].getAttribute('data-day-and-time');
        if(selectedDayTime === activityDayTime && checked !== activities[i]){
            if(checked.checked){
                activities[i].disabled = true;
            }else{
                activities[i].disabled = false;
            }
        }
    }
    //calculate cost
    let activityCost = parseInt(checked.getAttribute('data-cost'));
    if(checked.checked){
        total += activityCost;
        totalElement.textContent = (`Total Cost: $${total}`);
    }else{
        total -= activityCost;
        totalElement.textContent = (`Total Cost: $${total}`);
    }
});

/**
 * Payment info section
 * Display payment section based on payment option chosen in the select menu
 */
//7. Credit card option is selected by default
creditCardDiv.hidden = false;
//7a. Display the #credit-card div, hide "PayPal" and "Bitcoin" information.
payPalDiv.hidden = true;
bitcoinDiv.hidden = true;

//Make "Select Payment Method" not a clickable option
const selectMethodOption = paymentOption[0];
selectMethodOption.disabled = true;
const creditCardOption = paymentOption[1];
creditCardOption.selected = true;

//add event listener to payement option
paymentOption.addEventListener('change', (e)=>{
    //8. PayPal option is selected
    if(paymentOption.value === 'paypal'){
        //8a. Display payPal and hide credit-card and bitcoin information
        creditCardDiv.hidden = true;
        payPalDiv.hidden = false;
        bitcoinDiv.hidden = true;
    }
    //9. Bitcoin option is selected
    if(paymentOption.value === 'bitcoin'){
        //9a. Display bitcoin and hide credit-card and bitcoin information
        creditCardDiv.hidden = true;
        payPalDiv.hidden = true;
        bitcoinDiv.hidden = false;
    } 
    if(paymentOption.value === 'credit card'){
        //set credit card div as default
        creditCardDiv.hidden = false;
        payPalDiv.hidden = true;
        bitcoinDiv.hidden = true;
    }
});

/**
 * Form validation 
 * NOTE: Don't rely on the built in HTML5 validation by adding the required attribute to your DOM
 * elements. You need to actually create your own custom validation checks and error messages.
 */

//10. Prevent user from submitting the form if:

//validations:
//name:
const validateName = (userInputName) =>{
    const validUserInputName = (/^[A-Za-z]*[\s]?[A-Za-z-]*$/).test(userInputName.value);
    return validUserInputName;
};

// email:
const validateEmail = (userInputEmail) =>{
    //check to see if email is valid
    //any letter or number, @, any number or letters, only one ., and then either 2 or 3 letters (com / net / hk/ tw)
    const vaildUserInputEmail = (/^[A-za-z0-9]+@+[A-za-z0-9]+\.[A-za-z]{2,3}$/).test(userInputEmail.value);
    return vaildUserInputEmail;
}

//credit card number:
const validateCreditCardNumber = (creditCardNumber) =>{
    const validCreditCardNumber = (/^[0-9]{13,16}$/).test(creditCardNumber.value);
    return validCreditCardNumber;
}

//zip code:
const validateZipCode = (zip) =>{
    const validZipCode = (/^[0-9]{5}$/).test(zip.value);
    return validZipCode;
}

//cvv:
const validateCvv = (cvv) =>{
    const validCvv = (/^[0-9]{3}$/).test(cvv.value);
    return validCvv
}

//other job role 
const validateOtherJobRole = (otherJobRole) => {
    const validOtherJonRole = (/^\d\w\s$/).test(otherJobRole.value);
    return validateOtherJobRole;
}

//keyup error messaging
//name:
//create div for name error message
const nameMessageDiv = document.createElement('div');
getLabel[0].appendChild(nameMessageDiv);
nameMessageDiv.hidden = false;
//create event listneter
userInputName.addEventListener('keyup', (e) =>{
    //store user's input
    const userInput = e.target;
    if(userInputName.value === '' || validateName(userInput) === false){
        userInputName.style.borderStyle = 'none none none solid';
        userInputName.style.borderWidth = 'thick 20px';
        userInputName.style.borderColor = 'red';

        nameMessageDiv.textContent = 'Please enter a valid name';
        nameMessageDiv.style.color = 'red';
    } else{
        userInputName.style.borderStyle = 'none none none solid';
        userInputName.style.borderWidth = 'thick 20px';
        userInputName.style.borderColor = 'green';

        nameMessageDiv.textContent = (`Hi, ${userInput.value}`);
        nameMessageDiv.style.color = 'green';
    }
});

//email:
//create div for email error messaing
const emailMessageDiv = document.createElement('div');
getLabel[1].appendChild(emailMessageDiv);
//add event listneter
userInputEmail.addEventListener('keyup', (e) =>{
    //sroe user's input
    const userInput = e.target;
    if(validateEmail(userInput) === false){
        userInputEmail.style.borderStyle = 'none none none solid';
        userInputEmail.style.borderWidth = 'thick 20px';
        userInputEmail.style.borderColor = 'red';

        emailMessageDiv.textContent = 'Please enter a valid email';
        emailMessageDiv.style.color = 'red';
    } else{
        userInputEmail.style.borderStyle = 'none none none solid';
        userInputEmail.style.borderWidth = 'thick 20px';
        userInputEmail.style.borderColor = 'green';

        emailMessageDiv.textContent = 'Valid email';
        emailMessageDiv.style.color = 'green';
    }
}); 

//credit card:
//credit card number:
//create div for credit card number error messaging
const creditCardNumberMessageDiv = document.createElement('div');
getLabel[14].appendChild(creditCardNumberMessageDiv);
//create number too many / too little numbers span
const creditCardNumberMessageSpan = document.createElement('span');
getLabel[14].appendChild(creditCardNumberMessageSpan);
//add event listener
creditCardNumber.addEventListener('keyup', (e) =>{
    const userInput = e.target;
    //store number to display to users for how many over the valid number user has
    let tooManyNumber = userInput.value.length - 16;
    if(validateCreditCardNumber(userInput) === false){
        creditCardNumber.style.borderStyle = 'none none none solid';
        creditCardNumber.style.borderWidth = 'thick 20px';
        creditCardNumber.style.borderColor = 'red';

        creditCardNumberMessageDiv.textContent = 'Please enter a valid credit card number';
        creditCardNumberMessageDiv.style.color = 'red';
        if(userInput.value.length <= 13 || userInput.value.length >= 16){
            //store number to display to users how many more number(s) is needed to make it valid
            let atLeastNumber = (13 - (userInput.value.length));
            if(atLeastNumber > 0){
                creditCardNumberMessageSpan.textContent = (`You need at least ${atLeastNumber} more number(s)`);
            }
        }
    }
    if(validateCreditCardNumber(userInput)){
        creditCardNumber.style.borderStyle = 'none none none solid';
        creditCardNumber.style.borderWidth = 'thick 20px';
        creditCardNumber.style.borderColor = 'green';

        creditCardNumberMessageDiv.textContent = 'Valid zip code';
        creditCardNumberMessageDiv.style.color = 'green';
        creditCardNumberMessageSpan.hidden = true;
    }
    if(tooManyNumber > 0){
        creditCardNumber.style.borderStyle = 'none none none solid';
        creditCardNumber.style.borderWidth = 'thick 20px';
        creditCardNumber.style.borderColor = 'red';

        creditCardNumberMessageSpan.hidden = false;
        creditCardNumberMessageSpan.textContent = (`You have ${tooManyNumber} too many number(s)`)
    }
});

//zip code:
//create div for zip code error messaging
const zipMessageDiv = document.createElement('div');
getLabel[15].appendChild(zipMessageDiv);
//create number too many / too little numbers span
const zipMessageSpan = document.createElement('span');
getLabel[15].appendChild(zipMessageSpan);
//add event listener
zip.addEventListener('keyup', (e) =>{
    const userInput = e.target
    //store number to display to users for how many over the valid number user has
    let tooManyNumber = userInput.value.length - 5;
    if(validateZipCode(userInput) === false){
        zip.style.borderStyle = 'none none none solid';
        zip.style.borderWidth = 'thick 20px';
        zip.style.borderColor = 'red';
        
        zipMessageDiv.textContent = 'Please enter a valid zip code';
        zipMessageDiv.style.color = 'red';
        if(userInput.value.length <= 5){
            let atLeastNumber = (5 - (userInput.value.length));                
            if(atLeastNumber > 0){
                zipMessageSpan.textContent = (`You need at least ${atLeastNumber} more number(s)`);
            }
        }
    }
    if(validateZipCode(userInput)=== true){
        zip.style.borderStyle = 'none none none solid';
        zip.style.borderWidth = 'thick 20px';
        zip.style.borderColor = 'green';

        zipMessageDiv.textContent = 'Valid zip code';
        zipMessageDiv.style.color = 'green';
        zipMessageSpan.hidden = true;
    }
    if(validateZipCode(userInput) === false && tooManyNumber > 0){
        zip.style.borderStyle = 'none none none solid';
        zip.style.borderWidth = 'thick 20px';
        zip.style.borderColor = 'red';

        zipMessageSpan.hidden = false;
        zipMessageSpan.textContent = (`You have ${tooManyNumber} too many number(s)`)
    }
});

//cvv:
//create div for cvv error messaging
const cvvMessageDiv = document.createElement('div');
getLabel[16].appendChild(cvvMessageDiv);
//create number too many / too little numbers span
const cvvMessageSpan = document.createElement('span');
getLabel[16].appendChild(cvvMessageSpan);
//add event listener
cvv.addEventListener('keyup', (e) =>{
    const userInput = e.target;
    //store number to display to users for how many over the valid number user has
    let tooManyNumber = userInput.value.length - 3;
    if(validateCvv(userInput) === false){
        cvv.style.borderStyle = 'none none none solid';
        cvv.style.borderWidth = 'thick 20px';
        cvv.style.borderColor = 'red';

        cvvMessageDiv.textContent = 'Please enter a valid cvv';
        cvvMessageDiv.style.color = 'red';
        if(userInput.value.length <= 3){
            let atLeastNumber = (3 - (userInput.value.length));
            if(atLeastNumber > 0){
                cvvMessageSpan.textContent = (`You need at least ${atLeastNumber} more number(s)`);
            }
        }
    }
    if(validateCvv(userInput)){
        cvv.style.borderStyle = 'none none none solid';
        cvv.style.borderWidth = 'thick 20px';
        cvv.style.borderColor = 'green';

        cvvMessageDiv.textContent = 'Valid cvv';
        cvvMessageDiv.style.color = 'green';    
        cvvMessageSpan.hidden = true;
    }
    if(tooManyNumber > 0){
        cvv.style.borderStyle = 'none none none solid';
        cvv.style.borderWidth = 'thick 20px';
        cvv.style.borderColor = 'red';

        cvvMessageSpan.hidden = false;
        cvvMessageSpan.textContent = (`You have ${tooManyNumber} too many number(s)`)
    }
}); 

//add event listener to form submit button
form.addEventListener('submit', (e) =>{
    //10a. name field is blank or does not validate
    if(userInputName.value === '' || validateName(userInputName) === false){
        userInputName.style.borderStyle = 'none none none solid';
        userInputName.style.borderWidth = 'thick 20px';
        userInputName.style.borderColor = 'red';
        //prevent form submittting
        e.preventDefault();
    }else{
        userInputName.style.borderStyle = 'none none none solid';
        userInputName.style.borderWidth = 'thick 20px';
        userInputName.style.borderColor = 'green';
    }

    //10b. email fied must be valid formatted email
    if(userInputEmail.value === '' || validateEmail(userInputEmail) === false){
        userInputEmail.style.borderStyle = 'none none none solid';
        userInputEmail.style.borderWidth = 'thick 20px';
        userInputEmail.style.borderColor = 'red';
        //prevent from submitting
        e.preventDefault();
    }else{
        userInputEmail.style.borderStyle = 'none none none solid';
        userInputEmail.style.borderWidth = 'thick 20px';
        userInputEmail.style.borderColor = 'green';
    }

    //10c. at least one checkbox in activities section 
    if(total === 0){
        activityList.style.borderStyle = 'none none none solid';
        activityList.style.borderWidth = 'thick 20px';
        activityList.style.borderColor = 'red';
        //prevent form submittting
        e.preventDefault();
    }else{
        activityList.style.borderStyle = 'none none none solid';
        activityList.style.borderWidth = 'thick 20px';
        activityList.style.borderColor = 'green';
    }

    //10d. if payment method is credit card:
    if(paymentOption.value === 'credit card'){
        //10d i. credit card number (number between 13 - 16 digits)
        if(creditCardNumber.value === '' || validateCreditCardNumber(creditCardNumber) === false){
            creditCardNumber.style.borderStyle = 'none none none solid';
            creditCardNumber.style.borderWidth = 'thick 20px';
            creditCardNumber.style.borderColor = 'red';
            //prevent form submittting
            e.preventDefault();
        }else{
            creditCardNumber.style.borderStyle = 'none none none solid';
            creditCardNumber.style.borderWidth = 'thick 20px';
            creditCardNumber.style.borderColor = 'green';
        }

        //10d ii. zip code (5 digit)
        if(zip.value === '' || validateZipCode(zip) === false){
            zip.style.borderStyle = 'none none none solid';
            zip.style.borderWidth = 'thick 20px';
            zip.style.borderColor = 'red';
            //prevent form submittting
            e.preventDefault();
        }else{
            zip.style.borderStyle = 'none none none solid';
            zip.style.borderWidth = 'thick 20px';
            zip.style.borderColor = 'green';

        }

        //10d iii. three number CVV (3 digits)
        if(cvv.length === '' || validateCvv(cvv) === false){
            cvv.style.borderStyle = 'none none none solid';
            cvv.style.borderWidth = 'thick 20px';
            cvv.style.borderColor = 'red';
            //prevent form submittting
            e.preventDefault();
        }else{
            cvv.style.borderStyle = 'none none none solid';
            cvv.style.borderWidth = 'thick 20px';
            cvv.style.borderColor = 'green';
        }
    }
    
    // if other, must type something in input
    if(jobRoleSelection.value === 'other'){
        if(otherJobRole.value === '' || validateOtherJobRole(otherJobRole) === false){
            otherJobRole.style.borderStyle = 'none none none solid';
            otherJobRole.style.borderWidth = 'thick 20px';
            otherJobRole.style.borderColor = 'red';
        }else{
            otherJobRole.style.borderStyle = 'none none none solid';
            otherJobRole.style.borderWidth = 'thick 20px';
            otherJobRole.style.borderColor = 'green';
        }
        //if other is blank prevent from submitting, only if it is blank, because it is not a required validation for this project
        if(otherJobRole.value === ''){
            e.preventDefault();
        }
    }
    //if user did not select shirt
    if(design.value === 'Select Theme'){
        shirtSelectionDiv.style.backgroundColor = 'red';
        e.preventDefault();
    }else{
        shirtSelectionDiv.style.backgroundColor = 'green';
    }
});