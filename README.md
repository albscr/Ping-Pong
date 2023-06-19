# [Ping Pong Tracker App](https://ping-pong-tracker.vercel.app/)

This is a ping pong match tracking app. It allows you to record and track the results of your ping pong matches, storing information such as players, scores and match dates.

## Features
<ul>
  <li>Match Logging: You can record the details of your matches, including player names and scores.</li>
    <li>Statistics display: The application calculates and displays relevant statistics, such as average scores and top performers.</li>
    <li>Intuitive interface: The user interface is easy to use, with clear forms and simple navigation options.</li>
  </ul>

## Screenshots
<img width="1115" alt="image" src="https://github.com/albscr/Ping-Pong/assets/108294869/0ba1a1e1-c1ac-44ce-9e13-bf3faae78f1e">


## Getting started
<ul>
      <li>Clone this repository on your local machine.</li>
      <li>Open a terminal and navigate to the project folder.</li>
      <li>Run the following command to install the dependencies:</li>
</ul>

```
npm install
```
  <ul>
        <li>Then, start the application with the following command:</li>
  </ul>
  
```
npm start
```


  <ul>
        <li>The application will run in your browser at http://localhost:3000.:</li>
  </ul>


## Technologies used
  <ul>
        <li>React JS</li>
          <li>Typescript</li>
          <li>Tailwind</li>
  </ul>
  
  ## Usage

To use the Ping Pong Tracker app, follow these steps:

1. Open the application in your browser at [Ping Pong Tracker](https://ping-pong-tracker.vercel.app/).
2. On the home page, enter the names of two players in the designated input fields.
3. Click on the "Play Game" button to start the match.
4. The application will navigate to a new page where you can see the player names and a button for each player.
5. Each time a player scores a point, click on their respective button to increment their score by 1.
6. The application will display the current winner based on the scores. In case of a tie, you need to play a tie-breaker round.
7. Once the match is over, click on the "Save Game" button.
8. The application will show the winner of the match, indicating if they broke the record or not.
9. You can also view a list of previous winners, sorted from highest to lowest score.

Note: The application provides features to record and track multiple matches. You can repeat the process to play and save additional games.


  
  ## Testing

The project includes automated testing using Cypress, an end-to-end testing framework. 
The tests are designed to verify the correct functionality of the different features of the application.

### Test structure

The tests are organized in separate files inside the `cypress/integration` directory. 
Each test file focuses on a specific aspect of the application and contains a number of test cases.

### Test Coverage

The tests cover the main functionalities of the application, such as player creation, score tracking and statistics display. They are designed to cover common use cases and verify the stability and quality of the software.


## Contributions
Contributions are welcome. If you want to improve this application or add new features, follow these steps:

 <ul>
        <li>Create a fork of this repository.</li>
          <li>Create a branch for your new feature (git checkout -b feature/new-feature).</li>
          <li>Make the changes and commit (git commit -m 'Add new feature').</li>
            <li>Push your changes to the remote repository (git push origin feature/new-feature).</li>
            <li>Open a pull request on GitHub and describe your changes.</li>
  </ul>

## Contact 
[Alba Arenas](https://alba-arenas-portfolio.vercel.app/)




