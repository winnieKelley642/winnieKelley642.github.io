# list_pagination_and_filtering-v1
 This is project 2 of Treehouse FSJS Techdegree - List Pagination and Filtering

 I am going for the grade of exceeding expectations
Thank you @Juan L, @Emma W, @Lee V and @Jammie Gobeille for all the help 

 Treehouse provided me with these starter project files:
 - HTML files:
    - index.html
    - Example files:
        - 44students.html
        - 66students.html
        - example-exceeds.html
        - example-meets.html
 - CSS files:
    - design.css
    - reset.css
 - JS file:
    - script.js (This is the one I'm editing)

To exceed expectations Treehouse would like the following:
- NO SNIPPETS, PLUGINS OR LIBRARIES:
    - contains only plain "vanilla" JavaScript and doesn't rely on jQuery, some other library, or any code snippets or plugins.

- PROGRESSIVE ENCHANCEMENT & UNOBSTRUSIVE JAVASCRIPT
    - No inline JavaScript. All JavaScript is linked from an external file.
    - Use unobstrusive JavaScript to append markup for the pagination links. So none of the pagination link's markup is added into HTML.
    - Exceeds expectations by:
        - Use unobstrusive JavaScript to append HTML for a search bar

- PAGINATION LINKS:
    - Pagination Links are created. If there are 44 students, 5 links should be generated, if there's 66 students, 7 links should be generated. Etc.
    - Exceeds expectations by:
        - Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

- PAGING:
    - This first 10 students are shown when the page loads, and each pagination link displays the correct students.
    - Clicking on "1" in the pagination links should show students 1 to 10. Clicking "2" shows 11 to 20. Clicking "5" shows students 41 to 50, and so on.
    - Exceeds expectations by:
        - When a search yields 0 results, a message is displayed on the page, informing the user that no result have been found.

- CODE COMMENTS:
    - Code comments have been added explaining how the function works

Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

BREAK DOWN:

DISPLAYING A PAGE
- (Using console to test the function in the earlier stages)
1. Create a function that:
    1a. function hidides all the students other than the 10 students that are being displayed.
    1b. function should have two parameter:
        - list : the list of students that's being passed in as an argument when calling the function.
        - page : the page number that's being passed in as an argument when calling the function.
2. Create two variables (This is so it works with any length list).
    2a. Start Index = (page parameter * items per page) - items per page.
    2b. End Index = page parameter * items per page
3. Create a loop that loops over the list
    3a. display items that are:
        - greater than or equal to start index
        AND
        - less than the end index.
    3b. hide items that doesn't fit above parameters

ADDING PAGINATION LINKS
1. Create a function that:
    1a. function that creates and appends functioning pagination links.
    1b. accepts a single "list" parameter to represent the actual list of students.
    1c. Inside the function:
        - Create and append DOM elements for pagination links;
        - use lines 119 - 137 in examples/example-meets.html as template.
        - watch out for:
            - how elements are nested.
            - necessary class names.
            - other elements attributes.
            - where additions should be append.
2. Add active class to the first pagination link initially.
3. Add a "click" event listneer to each A element. A loop can be helpful here.
    3a. When the pagination link is clicked:
        - active class name should be removed from all pagination links (use a loop).
        - active calss name should be added to the link that was just clicked. (use target property of the event object).
        - showPage function should be called passing in arguments

RESULTS:
- container div element with class name "pagination"
- append to div element with class name of page.
- nested UL element containing one LI element for every 10 students in the list.

TIP:
- Divide the list.length by the max number of items per page to figure out how many pages are needed, and can use a loop that iterates that many times to create the correct number of LI elements.
- Each LI element should contain an A element with an href attribute of # and text set to the page number each link will show. First link is 1. Second link is 2. And so on.
- Loop index can be helpful in setting the text of the pagination links.