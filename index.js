// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *      -The variable in counter1 example is a local variable and can only be used inside 
 *  the loop, which is why it must be returned. On the other hand, counter2 example's variable
 *  a global variable and can be accesed anywhere in the code
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *      -Counter1 uses a closure because it is calling a function inside a function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *      -If you are looking to accomplish a certain task without using a global variable, otherwise counter2 would
 *  be better.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning.
 This should be a whole number between 0 and 2. */

function inning(score){
  return Math.floor(Math.random() *  Math.floor(score));
}

console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` 
(from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

const innings = 9;

function finalScore(innings){

  var scoreCard = {Home: 0, Away:0};

  for (let i = 0; i < innings; i++){

    scoreCard[0].Home = scoreCard[0].Home + inning(3);

    scoreCard[0].Away = scoreCard[0].Away + inning(3);

  }
  
  return scoreCard;

}

// console.log(finalScore(innings));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(innings) {

  let homeScore = 0;
  let awayScore = 0;

  for (let i = 1; i <= innings; i++){
    
    homeScore = homeScore + inning(3);
    awayScore = awayScore + inning(3);

    if ( i === 1){
      console.log(i + "st inning: " + homeScore + " - " + awayScore);
    }else if( i === 2){
      console.log(i + "nd inning: " + homeScore + " - " + awayScore);

    }else if( i === 3){
      console.log(i + "rd inning: " + homeScore + " - " + awayScore);
    }else{
      console.log(i + "th inning: " + homeScore + " - " + awayScore);

    }

  }


}


scoreboard(innings);
