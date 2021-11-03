# TJ's nate takehome

### Running this sucker
### Locally: 
- open three terminals and navigate to the root file, the 'frontend' file, and the 'api' file. Then run 'npm i' on all three. Then run 'npm start' for the frontend and the back and and navigate to localhost:3000 to see the application

### In Docker
#### I assume you have Docker Desktop. Run: 
- docker build -t tw-nate .
- docker run -d -it -p  3080:3080 tw-nate
then you should be able to access the image on on localhost:3080

or head to https://hub.docker.com/repository/docker/twetmore/tw-nate/

## Frontend
- Using React and Javascript. React's core values is state management, monodirectional dataflow, and replicability of components. This is demonstrated thru the main state being held in the 'app' file, the data and functionality being passed to the relative components, and the tables where the 'td' tags are reusable components
- Also note that I overused a loading spinner and that this is triggered any time I am doing data processing or trying to interact with the server. That's just good practice to prevent users from going haywire and sending a zillion requests

## Backend
- Using Node, TS, express, and NodeCache. Also used OOP/ class constructors as often as I could because it's easier to read and organize. 
- I used NodeCache as my thought was that if this scales cacheing will help performance. I also played around with Redis as an option as well but realized I was getting into scope creep. 
- I've also annotated the time complexity of that core algo 'getText'

## Testing
- wrote a simple unit test for the core algo 'getText'. it tests getting a smaller txt file for natural order, ascending order, descending order, and alphabetically. The reason why I wrote this is because it's the core function of this entire program and we would need to make sure it worked every time it was deployed.
- you can run it by going to 'api' in the terminal and 'npm test'
- There is no unit test for the front end. I would have to use E2E testing for anything similar, which was not in the specs. 


## Refactoring
- I would much prefer if all the words were the innerHTML of each element. It just makes more sense and is ultimately more usable. But overall this exercise should demonstrate my skills even if there's things that I could go back and nitpick 
- I cached results so it would be faster for the end user. The issue is that I didn't put the time into allowing for filtering results on the front end, so when the user retrieves old searches, it won't filter. This isn't hard to do, you would have functions in the browswer to sort current state, but I just didn't get to it. 


#### Checklist
1. Create a git repository on GitHub/BitBucket/GitLab with your project including
README file. (you're here!)
2. Include at least 1 meaningful unit-test (and explain why) on both frontend and
backend applications. 
** Only included one meanful unit-test** 
3. Make sure the your solution is reproducible: specify dependencies, versions, runtime
** see package.json in 'frontend' and 'api' **
4. Dockerize your application - include Dockerfile and how to run it example
** included **
5. Describe why you chose your tech stack.
** Chose Javascript for the browser for React, chose Node on the back end with Typescript because I wanted practice in TS **

bonus
1. Provide test coverage report for your unit tests
** included when you run 'npm test', or run 'npx jest --coverage'
2. Being able to sort the results, optionally adding a parameter to the backend to control
what to sort by
** included, but only in the initial call to the backend. cannot sort in the browser. Causes issues with the cached results, which could easily be fixed **
3. Use a functional programming approach when possible
** it is in javascript, which has supports first class functionality. I also threw in some OOP **
4. Leave comments where your code isn’t easily maintainable / readable and explain why
(do not over comment your code)
** did not over comment. But did comment the core function **
5. Distributed system design (think how your solution will scale when input text grows
significantly)
** included cacheing for scalability**






