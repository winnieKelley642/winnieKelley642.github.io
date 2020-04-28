/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination

Psuedo code written based on Treehouse Study guide and Instructions

I am going for exceed expectation. Thank you
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/**
 * I will be starting this project with a list of 54 student 
 * names, photos and email address.
 * Create something that will only show 10 students at a time.
 * Create a navigation system, a series of links at the bottom 
 * of the page.
 * Make sure that this will work with JavaScript turned off.
 * Make sure that this project will work with any number of 
 * students.
 */
//Global variables:
const listOfStudents = document.querySelectorAll('.student-item');
const numberOfStudentsPerPage = 10;
let currentPageNumber = 1;

var pageDiv = document.querySelector('.page');
const noMatchesFoundDiv = document.createElement('div');

var pageHeaderDiv = document.querySelector('.page-header');

var studentSearchDiv = document.createElement('div');
studentSearchDiv.setAttribute('class', 'student-search');
pageHeaderDiv.appendChild(studentSearchDiv);

var userSearchInput = document.createElement('input');
userSearchInput.setAttribute('placeholder', 'Search for students');
studentSearchDiv.appendChild(userSearchInput);

const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
studentSearchDiv.appendChild(searchButton);

//eventListeners for click and keyup
searchButton.addEventListener('click', (e)=>{
   search(userSearchInput.value);
});

userSearchInput.addEventListener('keyup', (e) => {
   search(e.target.value);
});

//function for search button
const search = (userInputValue) =>{
   let searchList = [];
   var allNames = document.querySelectorAll('.student-details h3');
   for(let i = 0; i < listOfStudents.length; i++){
      listOfStudents[i].style.display = 'none';
      var name = allNames[i];
      if(name.textContent.toLowerCase().includes(userSearchInput.value.toLowerCase())){
         searchList.push(listOfStudents[i]);
      }
   }
   showPage(searchList, 1);
   appendPageLinks(searchList);
}

/**
 * displaying a page
 * ceate function that hides all students except for the 10 that's being displayed
 * function should have two parameters, list and page
 * also displays error message for search if no match found
 */
const showPage = (anyList, page) => {
   //create 2 variables startIndex and endIndex so that this will work for any length list of students (variables and list provided by Treehouse)
   const startIndex = (page * numberOfStudentsPerPage) - numberOfStudentsPerPage;
   const endIndex = (page * numberOfStudentsPerPage);
   if(anyList.length === 0){
      noMatchesFoundDiv.style.display = '';
      noMatchesFoundDiv.textContent = "Sorry. There are no matches found. Please try again."
      pageDiv.appendChild(noMatchesFoundDiv);
   } else{
      noMatchesFoundDiv.style.display = 'none';
   }

   for (let i = 0; i < anyList.length; i++){
      if ( i >= startIndex && i < endIndex){
         anyList[i].style.display = '';
      } else{
         anyList[i].style.display = 'none';
      }
   }
}

/**
 * adding pagination links
 * create function that appends page links at the bottom of the page
 * should accept any length list
 * uses line 119 - 137 in examples/example-meets.html as template
 * should have an active class for the initial page that it's on then active on the page that's clicked on
 */
const appendPageLinks = (listOfStudents) => {
  var clearPagination = document.querySelector('.pagination');
  if (clearPagination){
     clearPagination.remove();
  }

   const numberOfPages = Math.ceil(listOfStudents.length / numberOfStudentsPerPage);

   var pageDiv = document.querySelector('.page');
   var paginationDiv = document.createElement('div');
   paginationDiv.setAttribute('class', 'pagination');
   pageDiv.appendChild(paginationDiv);
   
   var ulDiv = document.createElement('ul');
   ulDiv.setAttribute('class', 'pagination-ul');
   paginationDiv.appendChild(ulDiv);

   for(let i  = 1; i <= numberOfPages; i++)
   {
     var liPagination = document.createElement('li');
     liPagination.setAttribute('class', 'pagination-li');
     ulDiv.appendChild(liPagination);

     var aPagination = document.createElement('a');
     aPagination.setAttribute('class', 'pagination-a');
     aPagination.href = '#';
     aPagination.textContent = (i);
     liPagination.appendChild(aPagination);

     if(currentPageNumber === 1){
        aPagination.classList.add('active');
        currentPageNumber++;
     }
   }

   const aLinks = document.querySelectorAll('a');
   const firstALink = aLinks[0];
   if(firstALink){
      firstALink.className = ('active');
   }
   for(let i = 0; i < aLinks.length; i++){
      aLinks[i].addEventListener('click', (e) =>{
         const activePage = document.querySelector('.active');
         activePage.className = ('');
         const buttonClicked = e.target;
         currentPageNumber = buttonClicked.textContent;
         buttonClicked.className = 'active';
         showPage(listOfStudents, currentPageNumber);
      });
   }
}
showPage(listOfStudents, 1);
appendPageLinks(listOfStudents); 