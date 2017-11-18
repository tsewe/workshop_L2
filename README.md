Budget Tool with React Bootstrap

Prerequisites
1. Install nodejs : https://nodejs.org/en/download/ . Nodejs is a server for our case study.
2. (Recommended) Install Visual Studio Code (VSC): https://code.visualstudio.com/download.
You can develop in any favourite editor or IDE, but also learn about VSC, which has some fancy features
making development in Javascript attractive.
3. (Recommended) Download Chrome web browser. Enable debugging in VSC with the support of
Chrome web browser : https://code.visualstudio.com/docs/editor/debugging
4. Run in the root folder of the project : npm install (In VSC you can do it from an integrated terminal : View->Integrated Terminal).
This will download all needed dependencies for the project.
5. Run in the root folder of the project : npm start
This will start the application and open it in your default web browser

Workshop tasks
1.	ExpensesView.js is the page for presenting results of the calculation. Currently, it misses functionality of doing calculation. Modify calcuateShare()
function to provide a "result" array with expected data inside. The presentation part is already developed, so only a calculation providing an input to it
needs to be developed. It should cover cases when all participants together with the user inserting the data
collected the amount, that is equal or higher than the total cost of their shopping. Notice, that the user who provides data in "Enter your contribution"
field, is not included by default in the list of all participants, so you have to add him to this list before making all calculations.
	hints : 
		It might be faster to develop an algorithm when you write a simple program in any language you feel strongest with and then rewrite it to
		Javascript syntax.
		Useful page with documentation and code snippets for Javascript : https://developer.mozilla.org/en-US/
				
