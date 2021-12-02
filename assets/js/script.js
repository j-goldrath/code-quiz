// create an array of objects to hold questions and answers
let questions = [
  {
    question: "What does the J. in Homer J. Simpson stand for?",
    choices: ["John", "Joseph", "Jay", "James"],
    answer: "Jay"
  },
  {
    question: "What street address does the simpsons family live at?",
    choices: ["88 Elm Street", "742 Evergreen Terrace", "123 Fake Street", "1600 Pennsylvania Avenue"],
    answer: "742 Evergreen Terrace"
  },
  {
    question: "Which simpsons character shot Mr. Burns?",
    choices: ["Marge Simpson", "Wayland Smithers", "Moe Sizlak", "Maggie Simpson"],
    answer: "Maggie Simpson"
  },
  {
    question: "Who did Marge Simpson go to her highschool prom with?",
    choices: ["Homer Simpson", "Artie Ziff", "Disco Stu", "Hans Moleman"],
    answer: "Artie Ziff"
  },
  {
    question: "What was the cause of Maude Flander's death?",
    choices: ["Parasailing Accident", "T-Shirt Cannon", "Church Fire", "Accidental Poisoning"],
    answer: "T-Shirt Cannon"
  },
  {
    question: "What is the name of Homer's half brother?",
    choices: ["Herbert", "Abraham", "Stuart", "Lenny"],
    answer: "Herbert"
  },
  {
    question: "Which of these is a Bart Simpson catchphrase?",
    choices: ["Mmmm...Donuts", "Ha! Ha!", "Eat My Shorts!", "Excellent..."],
    answer: "Eat My Shorts!"
  },
  {
    question: "Who is Lenny's best friend?",
    choices: ["Barney Gumble", "Homer Simpson", "Moe Sizlak", "Carl Carlson"],
    answer: "Carl Carlson"
  },
  {
    question: "In Treehouse of Horror VII, what is the name of Bart's evil twin?",
    choices: ["Brett", "Hugo", "Nelson", "Wendell"],
    answer: "Hugo"
  },
  {
    question: "Where does Homer Simpson work?",
    choices: ["The Kwik-E-Mart", "Moe's Tavern", "Try'N'Save", "Springfield Nuclear Power Plant"],
    answer: "Springfield Nuclear Power Plant"
  },
  {
    question: "Who is Bart Simpson's best friend?",
    choices: ["Nelson Muntz", "Milhouse Van Houten", "Martin Prince", "Ralph Wiggum"],
    answer: "Milhouse Van Houten"
  },
  {
    question: "Who founded the town of Springfield?",
    choices: ["Hans Springfield", "Jasper Springfield", "Jebediah Springfield", "Johnny Newspaper-Seed"],
    answer: "Jebediah Springfield"
  },
  {
    question: "What is the name of Ned Flander's store at the Springfield mall?",
    choices: ["Bible Blasters", "The Leftorium", "The Hi-Diddly-Ho-Mart", "Ned's Beds"],
    answer: "The Leftorium"
  },
  {
    question: "What city/town is right next to Springfield?",
    choices: ["Peoria", "Capital City", "Shelbyville", "Coolsville"],
    answer: "Shelbyville"
  },
  {
    question: "What is the name of Bart Simpson's favorite celebrity?",
    choices: ["Troy McClure", "Rainier Wolfcastle", "Bumblebee Man", "Krusty The Clown"],
    answer: "Krusty The Clown"
  },
  {
    question: "Which of the following is not one of Homer Simpson's catchphrases?",
    choices: ["Beer Me!", "D'oh", "Mmmm...Donuts", "Woo-Hoo!"],
    answer: "Beer Me!"
  },
  {
    question: "If you added the number of Simpson children to the number of Flanders children, what would the total be?",
    choices: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "What is Principal Skinner's real name?",
    choices: ["Gary Chalmers", "Percival Skinrash", "Nick Riviera", "Armin Tamzarian"],
    answer: "Armin Tamzarian"
  },
  {
    question: "What Homer Simpson's mother's first name?",
    choices: ["Mona", "Maude", "Helen", "Selma"],
    answer: "Mona"
  },
  {
    question: "What is the name of Lisa Simpson's teacher at Springfield Elementary School?",
    choices: ["Mrs. Krabappel", "Miss Hoover", "Professor Frink", "Sr. Fuente"],
    answer: "Miss Hoover"
  },
  {
    question: "When Homer was briefly promoted to executive, what was the name of his secretary?",
    choices: ["Stacy", "Chip", "Pat", "Karl"],
    answer: "Karl"
  },
  {
    question: "Who composed the theme music for the Simpsons?",
    choices: ["Hanz Zimmer", "Quincy Jones", "Danny Elfman", "Randy Newman"],
    answer: "Danny Elfman"
  },
  {
    question: "What was the name of Mr. Burns's teddy bear?",
    choices: ["Teddy", "Bobo", "Mr. Bearns", "Senior Tito Fuentes"],
    answer: "Bobo"
  },
  {
    question: "What is Homer Simpson's favorite beer?",
    choices: ["Heineken", "Fudd Light", "Dubweiser", "Duff"],
    answer: "Duff"
  },
  {
    question: "What is the name of the Simpson family's dog?",
    choices: ["Santa's Little Helper", "Snowball II", "Laddie", "Bob Barker"],
    answer: "Santa's Little Helper"
  },

];

let defaultTimeLimitInSeconds = 120; // use/change this value to set default time limit for quiz in seconds

// create empty array to hold highscore objects
let highscores = [
  {
    name: "El Barto",
    grade: 69
  },
  {
    name: "Lisa",
    grade: 97
  },
  {
    name: "Martin",
    grade: 88
  },
  {
    name: "Milhouse",
    grade: 65
  },
  {
    name: "Ralph",
    grade: 60
  }
];

// populate high score object array with entries from local storage


// Active Quiz Stats
let timeRemainingInSeconds; // declare a variable to hold the remaing time in seconds for an active quiz and set it to the default time limit
let totalQuestions = questions.length; // set equal to number of question objects in questions array
let questionsAnswered = 0; //set number of questions asked to zero
let correctAnswers = 0; // set correct answers to zero
let currentQuestionIndex = 0; // set current question index to zero

// used throughout quiz to identify the container in which quiz cards are generated
let qCardContainer = document.getElementById("quiz-container"); // create a variable that targets the quiz container element in page body

// used later for setting/updating the current score and remaining time of quiz in progress
let currentScoreEl = document.getElementById("current-score"); // create a variable that targets the current score element in score card on navbar
let timerEl = document.getElementById("quiz-timer"); //create a variable that targets the time in timer card on navbar

// used later for visually indicating that a point was awarded or time was deducted by changing background color
let timerCardDiv = document.getElementById("timer-card"); // create a variable that targets the timer card div on navbar
let scoreCardDiv = document.getElementById("score-card"); // create a variable that targets the score card div on navbar 

// create variables to store final letter grade and rating
let finalLetterGrade;
let finalRating;
let finalPercentageGrade;

// Function to convert time in seconds to minutes:seconds format (XX:XX) for use in timer element
function convertSecondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60).toString();
  let secondsRemaining = (seconds % 60).toString();

  if (secondsRemaining.length < 2) {
    secondsRemaining = "0" + secondsRemaining;
  }
  return minutes + ":" + secondsRemaining;
};

// simple function to completely clear quiz container div of all elements/content
function clearQuizContainer() {
  qCardContainer.innerHTML = ""; // set innerHTML of quiz container to empty string
};

// Function to start the quiz
function startQuiz() {
  resetQuizStats();
  clearQuizContainer();
  startTimer();
  generateQuestionCard(currentQuestionIndex);
};

// Function to end the quiz
function endQuiz() {
  timerEl.textContent = "-:-"; // blank the timer
  currentScoreEl.textContent = "-"; // blank the current score
  clearQuizContainer();
  generateStatsCard();
};

// Function to reset quiz stats before starting/restarting the quiz
function resetQuizStats() {
  timeRemainingInSeconds = defaultTimeLimitInSeconds; // reset time remaining to default time limit
  currentScoreEl.textContent = 0; // reset current score to 0
  currentQuestionIndex = 0; // reset current question index to 0
  totalQuestions = questions.length; // set total questions to number of question objects in questions array
  questionsAnswered = 0; // set number of questions answered to zero
  correctAnswers = 0; // set number of correctly answered questions to zero
  currentQuestionIndex = 0; // set question index to zero
};

// Function to start and update quiz timer, also monitors time remaing and ends quiz when time runs out
function startTimer() {
  timerEl.textContent = convertSecondsToMinutes(timeRemainingInSeconds); // set the quiz timer to whatever the default time limit is
  // setup an interval timer that runs every second
  let timerInterval = setInterval(function () {
    timeRemainingInSeconds--; // decrement time remaining by 1 second
    timerEl.textContent = convertSecondsToMinutes(timeRemainingInSeconds); // update the quiz timer to reflect the new time remaining
    // if remaining time reaches zero or all questions have been answered, then stop timer and end quiz
    if (timeRemainingInSeconds === 0 || questionsAnswered === totalQuestions) {
      clearInterval(timerInterval); // clear timer interval so timer will no longer be updated
      timeRemainingInSeconds = 0; // set time remaing to zero
      endQuiz();
    }
  }, 1000);
};

// Function to create quiz question card that takes 3 arguments: question, [choices], and answer
function generateQuestionCard(questionIndex) {
  let qCard = document.createElement("div"); // create div to serve as question card
  qCard.classList.add("card", "text-center", "qCard", "mt-4", "py-3"); // add class of card and text-center provided by bootstrap
  let qCardBody = document.createElement("div"); // create div to serve as question card body
  qCardBody.classList.add("card-body"); // add class of card-body provided by bootstrap
  qCard.appendChild(qCardBody); // append question card body to question card
  let qCardQuestion = document.createElement("h2"); // create h2 element to serve as question
  qCardQuestion.classList.add("card-title", "py-5") // add class of card-title provided by bootstrap
  qCardQuestion.textContent = questions[currentQuestionIndex].question; // fill h2 element with question text
  qCardBody.appendChild(qCardQuestion); // append question to question card body
  let qCardChoicesRow = document.createElement("div"); // create div to serve as row of choices
  qCardChoicesRow.classList.add("row", "justify-content-center", "gy-4"); // add class of row and justfy-content-center provided by bootstrap
  qCardBody.appendChild(qCardChoicesRow); // append row of choices to question card body

  for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) { // loop through choices array
    let qCardChoiceCol = document.createElement("div"); // create div to serve as column to contain choice buttons
    qCardChoiceCol.classList.add("col-sm-12", "col-md-6"); // add class of col-sm-12 and col-md-6 provided by bootstrap
    let qCardChoiceButton = document.createElement("button"); // create button to serve as choice button
    qCardChoiceButton.classList.add("btn", "btn-primary", "btn-lg", "btn-block"); // add class of btn, btn-primary, btn-lg, and btn-block provided by bootstrap
    qCardChoiceButton.type = "button"; // set button type to button
    qCardChoiceButton.style = "width: 90%"; // set button width to 90%
    qCardChoiceButton.innerHTML = questions[currentQuestionIndex].choices[i]; // fill choice button with choice text
    qCardChoiceButton.setAttribute('onclick', `selectAnswer("${questions[currentQuestionIndex].choices[i]}");`); // set onclick attribute to call selectAnswer function with choice text as argument
    qCardChoiceCol.appendChild(qCardChoiceButton); // append choice button to column
    qCardChoicesRow.appendChild(qCardChoiceCol); // append column with button to row of choices
  };

  qCardContainer.appendChild(qCard); // append question card to quiz container

};

function generateStatsCard() {
  let qCard = document.createElement("div"); // create div to serve as question card
  qCard.classList.add("card", "text-center", "qCard", "mt-4", "py-3"); // add class of card and text-center provided by bootstrap
  let qCardBody = document.createElement("div"); // create div to serve as question card body
  qCardBody.classList.add("card-body"); // add class of card-body provided by bootstrap
  qCard.appendChild(qCardBody); // append question card body to question card
  let qCardResults = document.createElement("h2"); // create h2 element to serve as question
  qCardResults.classList.add("card-title", "py-5") // add class of card-title provided by bootstrap
  qCardResults.textContent = "Here's how you did:"; // fill h2 element with question text
  qCardBody.appendChild(qCardResults); // append question to question card body
  let qCardStatsRow = document.createElement("div"); // create div to serve as row of choices
  qCardStatsRow.classList.add("row", "justify-content-center", "gy-4"); // add class of row and justfy-content-center provided by bootstrap
  qCardBody.appendChild(qCardStatsRow); // append choices row to question card body

  // generate stats subcards to be appended to qCardStatsRow div
  generateStatsSubCard("You Answered:", `${questionsAnswered}/${totalQuestions}`, "Questions", qCardStatsRow);
  generateStatsSubCard("Total Score:", correctAnswers, "Points", qCardStatsRow);

  calculateGrade();
  generateStatsSubCard("Your Grade:", finalLetterGrade, finalRating, qCardStatsRow);

  if (checkIfHighscore(finalPercentageGrade)) {
    generateHighScoreEntryCard(qCardStatsRow);
  }

  // append qCard and all children to qCard Container
  qCardContainer.appendChild(qCard); // append question card to quiz container

  // target the name input text field for highscore and set onclick function accordingly to call submitHighScore function
  let nameEntryField = document.getElementById("highscoreNameEntryField").value;
  highscoreNameSubmitButton.setAttribute('onclick', `addHighScore(document.getElementById("highscoreNameEntryField").value, ${finalPercentageGrade});`);
};

// Function to calculate quiz 
function calculateGrade() {

  // divide number of correct answers by total number of questions and multiply by 100 to get percentage
  let percentageGrade = Math.round(correctAnswers / totalQuestions * 100);
  // create variable to hold letter grade determined by if statements
  let letterGrade;
  let rating;
  if (percentageGrade <= 59) {
    letterGrade = "F";
    rating = "You failed!";
    playAfterDelay("tried-and-failed", 2000);
  } else if (percentageGrade >= 60 && percentageGrade <= 62) {
    letterGrade = "D-";
    rating = "You barely passed!";
    playAfterDelay("me-fail-english", 2000);
  } else if (percentageGrade >= 63 && percentageGrade <= 66) {
    letterGrade = "D";
    rating = "You need to study more!"
    playAfterDelay("proclamation-haha", 2000);
  } else if (percentageGrade >= 67 && percentageGrade <= 69) {
    letterGrade = "D+";
    rating = "You can do better!"
    playAfterDelay("feeling-stupid", 2000);
  } else if (percentageGrade >= 70 && percentageGrade <= 72) {
    letterGrade = "C-";
    rating = "Room for improvement!"
    playAfterDelay("erasers-on-pencils", 2000);
  } else if (percentageGrade >= 73 && percentageGrade <= 76) {
    letterGrade = "C";
    rating = "Average"
    playAfterDelay("elected-officials", 2000);
  } else if (percentageGrade >= 77 && percentageGrade <= 79) {
    letterGrade = "C+";
    rating = "Above average"

  } else if (percentageGrade >= 80 && percentageGrade <= 82) {
    letterGrade = "B-";
    rating = "Not bad!"
  } else if (percentageGrade >= 83 && percentageGrade <= 86) {
    letterGrade = "B";
    rating = "More than OK!"
    playAfterDelay("okily-dokily", 2000);
  } else if (percentageGrade >= 87 && percentageGrade <= 89) {
    letterGrade = "B+";
    rating = "Good job!"

  } else if (percentageGrade >= 90 && percentageGrade <= 92) {
    letterGrade = "A-";
    rating = "Way to go!"
    playAfterDelay("oh-yeah", 2000);
  } else if (percentageGrade >= 93 && percentageGrade <= 96) {
    letterGrade = "A";
    rating = "You did amazing!";
    playAfterDelay("know-it-all", 2000)
  } else if (percentageGrade >= 97 && percentageGrade <= 100) {
    letterGrade = "A+";
    rating = "Excellent!"
    playAfterDelay("excellent", 2000)
  }

  // finalLetterGrade = `${percentageGrade}% ${letterGrade}`;
  finalLetterGrade = letterGrade;
  finalRating = rating;
  finalPercentageGrade = percentageGrade;
};

// Function that generates subcards within stats qCard at end of quiz
function generateStatsSubCard(label, value, description, parent) {

  // generate div with class of column to contain stats sub card
  let statsSubCardCol = document.createElement("div");
  statsSubCardCol.classList.add("col-sm-12", "col-md-4");
  // generate div with class of card to contain stats text and append to column
  let statsSubCard = document.createElement("div");
  statsSubCard.classList.add("card", "text-center");
  statsSubCardCol.appendChild(statsSubCard);
  // generate div with class of card body to contain stats text and append to card
  let statsSubCardBody = document.createElement("div");
  statsSubCardBody.classList.add("card-body");
  statsSubCard.appendChild(statsSubCardBody);
  // generate h3 element to serve as stats card label and append to card body
  let statsSubCardLabel = document.createElement("h3");
  statsSubCardLabel.classList.add("mb-4");
  statsSubCardLabel.textContent = label;
  statsSubCardBody.appendChild(statsSubCardLabel);
  // generate h1 element to serve as stats card value and append to card body
  let statsSubCardValue = document.createElement("h1");
  if (label === "Your Grade:") {
    statsSubCardValue.classList.add("text-danger");
  }
  // statsSubCardValue.classList.add("align-middle");
  statsSubCardValue.textContent = value;
  statsSubCardBody.appendChild(statsSubCardValue);
  // generate h4 element to serve as stats card description and append to card body
  let statsSubCardDescription = document.createElement("h4");
  statsSubCardDescription.textContent = description;
  statsSubCardBody.appendChild(statsSubCardDescription);
  // append entire statsSubCardCol and all children to parentElement passed as function argument
  parent.appendChild(statsSubCardCol);
};

// This function fires anytime a correct answer is selected by user during quiz
function answeredCorrectly() {
  correctAnswers++; // increment correctAnsers by 1
  currentScoreEl.textContent = correctAnswers; // update current score element text content in navbar, reflecting that point was scored
  scoreCardDiv.className = "g2b-fading"; // add class of g2b-fading to scoreCardDiv to indicate that additional point was scored
  setTimeout(() => { scoreCardDiv.className = ""; }, 500); // set timeout to remove class of g2b-fading after 500ms
  play("woohoo"); // play woohoo soundFX to alert user that they answered correctly
};

// This function fires anytime an incorrect answer is selected by user during quiz
function answeredIncorrectly() {
  timeRemainingInSeconds = timeRemainingInSeconds - 5; // decrement timeRemainingInSeconds by 5 as penalty for incorrect answer
  timerCardDiv.className = "r2b-fading"; // add class of r2b-fading to timerCardDiv to indicate that time penalty was applied
  setTimeout(() => { timerCardDiv.className = ""; }, 500); // set timeout to remove class of r2b-fading after 500ms
  play("doh"); // play doh soundFX to alert user that they answered incorrectly
};

// Function that checks answer choice selected by user against the current question object answer key
function selectAnswer(choice) {

  // if choice selected by user matches answer of current question object then answer is correct, if not then incorrect
  if (choice === questions[currentQuestionIndex].answer) {
    answeredCorrectly();
  } else {
    answeredIncorrectly();
  }

  questionsAnswered++; // increment questions answered by 1
  currentQuestionIndex++; // increment current question index by 1
  clearQuizContainer();

  // if number of questions answered equals total number of questions in quiz, then quiz is over, otherwise generate next question card
  if (questionsAnswered === totalQuestions) {
    endQuiz();
  } else {
    generateQuestionCard(currentQuestionIndex); // generate new question card based on currentQuestionIndex which was just incremented by 1
  }
};

// Function to play sound effect, takes id of desired audio element as argument
function play(soundId) {
  let audio = document.getElementById(soundId);
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0
  }
};

function playAfterDelay(soundId, delay) {
  setTimeout(() => {
    let audio = document.getElementById(soundId);
    audio.play()
  }, delay);
};

function checkIfHighscore(score) {
  let isHighscore = false;
  for (var i = 0; i < highscores.length; i++) {
    /////////////
    console.log(score);
    if (score > highscores[i].grade) {
      isHighscore = true;
    }
    console.log(isHighscore);
  }
  return isHighscore;
};

// fucntion to add players name and score to top 5 highscores list
function addHighScore(playerName, playerScore) {
  let sortedArray;
  // if there are already 5 highscores then remove lowest score before proceeding
  if (highscores.length === 5) {
    // sort highscores array in ascending order by score
    sortedArray = highscores.sort(dynamicSort("grade"));
    // remove first element in sortedArray, which is the lowest score
    sortedArray.shift();
  }

  // add new highscore to sortedArray
  sortedArray.push({ name: playerName, grade: playerScore });
  // re-sort updated array in descending order by score
  sortedArray.sort(dynamicSort("-grade"));
  highscores = sortedArray; // overwrite gloabal highscores array with updated sorted array
  generateHighscoreCard();
};

// function to help sort array of objects by specific key/value of each object in array
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers, 
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
};

function generateHighscoreCard() {
  let qCard = document.createElement("div"); // create div to serve as question card
  qCard.classList.add("card", "text-center", "qCard", "mt-4", "py-3"); // add class of card and text-center provided by bootstrap
  let qCardBody = document.createElement("div"); // create div to serve as question card body
  qCardBody.classList.add("card-body"); // add class of card-body provided by bootstrap
  qCard.appendChild(qCardBody); // append question card body to question card
  let qCardResults = document.createElement("h2"); // create h2 element to serve as question
  qCardResults.classList.add("card-title", "py-5"); // add class of card-title provided by bootstrap
  qCardResults.textContent = "High Scores:"; // fill h2 element with question text
  qCardBody.appendChild(qCardResults); // append question to question card body
  let qCardStatsRow = document.createElement("div"); // create div to serve as row of choices
  qCardStatsRow.classList.add("row", "justify-content-center", "gy-4"); // add class of row and justfy-content-center provided by bootstrap
  qCardBody.appendChild(qCardStatsRow); // append choices row to question card body
  // create column div to hold list
  let qCardCol = document.createElement("div");
  qCardCol.classList.add("col-sm-10", "col-md-6", "col-lg-4");
  qCardStatsRow.appendChild(qCardCol);
  // create unordered list element to hold highscore list items
  let highscoreUl = document.createElement("ul");
  highscoreUl.classList.add("list-group");
  qCardCol.appendChild(highscoreUl);
  // loop through highscores array and create list item for each highscore
  for (var i = 0; i < highscores.length; i++) {
    let highscoreLi = document.createElement("li");
    highscoreLi.classList.add("list-group-item");
    highscoreLi.textContent = highscores[i].name + ": " + highscores[i].grade;
    highscoreUl.appendChild(highscoreLi);
  }
  // add button to play quiz again
  let playAgainButton = document.createElement("button");
  playAgainButton.classList.add("btn", "btn-primary", "btn-lg", "mt-5");
  playAgainButton.textContent = "Play Again";
  playAgainButton.setAttribute('onclick', 'startQuiz();');
  qCardBody.appendChild(playAgainButton);
  clearQuizContainer();
  // append qCard and all children to qCard Container
  qCardContainer.appendChild(qCard); // append question card to quiz container
};

function generateHighScoreEntryCard(parentEl) {
  // create column div to hold card containing other elements
  let highscoreEntryCardCol = document.createElement("div");
  highscoreEntryCardCol.classList.add("col-sm-10", "col-md-6", "col-lg-4");
  // create card div to hold name entry field and submit button
  let highscoreEntryCard = document.createElement("div");
  highscoreEntryCard.classList.add("card", "text-center");
  highscoreEntryCardCol.appendChild(highscoreEntryCard);
  // add h4 element as label for highscore entry card
  let highscoreEntryCardLabel = document.createElement("h4");
  highscoreEntryCardLabel.classList.add("py-2");
  highscoreEntryCardLabel.textContent = "New High Score!";
  highscoreEntryCard.appendChild(highscoreEntryCardLabel);
  // create text entry field for user to enter name
  let highscoreNameEntryField = document.createElement("input");
  highscoreNameEntryField.classList.add("form-control", "form-control-lg", "mb-3");
  highscoreNameEntryField.setAttribute("type", "text");
  highscoreNameEntryField.setAttribute("placeholder", "Enter Name");
  highscoreNameEntryField.setAttribute("id", "highscoreNameEntryField");
  highscoreEntryCard.appendChild(highscoreNameEntryField);
  // create button to submit name
  let highscoreNameSubmitButton = document.createElement("button");
  highscoreNameSubmitButton.classList.add("btn", "btn-primary", "btn-lg", "mb-3");
  highscoreNameSubmitButton.setAttribute("type", "button");
  highscoreNameSubmitButton.setAttribute("id", "highscoreNameSubmitButton");
  highscoreNameSubmitButton.textContent = "Submit";
  highscoreEntryCard.appendChild(highscoreNameSubmitButton);

  // append highscore entry card column div, plus all children, to the end of parent div passed as argument
  parentEl.appendChild(highscoreEntryCardCol);

};