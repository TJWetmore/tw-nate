# TJ's nate takehome

## Running this sucker
### Locally: 
- open three terminals and navigate to the root file, the 'my-app' file, and the 'api' file. Then run 'npm i' on all three. Then run 'npm start' for all three and navigate to localhost:3000 to see the application

### In Docker
#### I assume you have Docker Desktop. Run: 
- docker build -t twetmore/tw-nate .
- docker run -d -it -p  3080:3080 tw-nate
then you should be able to access it on localhost:3080

you can also run 'docker pull twetmore/tw-nate:latest' or head to https://hub.docker.com/repository/docker/twetmore/tw-nate/

## Frontend
- Using React and Javascript. React's core values is state management, monodirectional dataflow, and replicability of components. This is demonstrated thru the main state being held in the 'app' file, the data and functionality being passed to the relative components, and the tables where the '<td>' tags are reusable components
- Also note that I overused a loading spinner and that this is triggered any time I am doing data processing or trying to interact with the server. That's just good practice to prevent users from going haywire and sending a zillion requests

## Backend
- Using Node, TS, express, and NodeCache. Also used OOP/ class constructors as often as I could because it's easier to read and organize. 
- I used NodeCache as my thought was that if this scales cacheing will help performance. I also played around with Redis as an option as well but realized I was getting into scope creep. 
- I've also annotated the time complexity of that core algo 'getText'

## Testing
- wrote a simple unit test for the core algo 'getText'. it tests getting a smaller txt file I found on github for natural order, ascending order, descending order, and alphabetically. 
- navigate to the 'api' folder and run 'npm test'
- There is no unit test for the front end. I would have to use E2E testing for anything similar, which was not in the specs. 


## Refactoring thoughts
- I would much prefer if all the words were the innerHTML. It just makes more sense and is ultimately more usable. But overall this exercise should demonstrate my skills even if there's things that I could go back and nitpick 
- I cached results so it would be faster for the end user. 




