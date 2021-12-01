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
    question: "What is the name of Bart's evil twin?",
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
    choices: ["Beer Me!","D'oh", "Mmmm...Donuts", "Woo-Hoo!"],
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
    choices: ["Mrs. Krabappel", "Miss Hoover", "Professor Frink", "Senior Tito Fuentes"],
    answer: "Miss Hoover"
  },
];

let defaultTimeLimitInSeconds = 120; // use/change this value to set default time limit for quiz in seconds

let timeRemainingInSeconds; // create a variable to hold the remaing time in seconds for an active quiz and set it to the default time limit 

let quizStats = {

}
let totalQuestions = questions.length;
let questionsAnswered = 0;
let correctAnswers = 0;
let currentQuestionIndex = 0;

// used throughout quiz to identify the container in which quiz cards are generated
let qCardContainer = document.getElementById("quiz-container"); // create a variable that targets the quiz container element in page body

// used later for setting/updating the current score and remaining time of quiz in progress
let currentScoreEl = document.getElementById("current-score"); // create a variable that targets the current score element in score card on navbar
let timerEl = document.getElementById("quiz-timer"); //create a variable that targets the time in timer card on navbar

// used later for visually indicating that a point was awarded or time was deducted by changing background color
let timerCardDiv = document.getElementById("timer-card"); // create a variable that targets the timer card div on navbar
let scoreCardDiv = document.getElementById("score-card"); // create a variable that targets the score card div on navbar 


// Function to convert time in seconds to minutes:seconds format (XX:XX) for use in timer element
function convertSecondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60).toString();
  let secondsRemaining = (seconds % 60).toString();

  if (secondsRemaining.length < 2) {
    secondsRemaining = "0" + secondsRemaining;
  }
  return minutes + ":" + secondsRemaining;
}

// Function to completely clear quiz container div of all elements/content
function clearQuizContainer() {
  let quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";
}

// Function to start the quiz
function startQuiz () {
  timeRemainingInSeconds = defaultTimeLimitInSeconds; // reset time remaining to default time limit
  currentScoreEl.textContent = 0; // reset current score to 0
  currentQuestionIndex = 0; // reset current question index to 0
  startTimer();
  clearQuizContainer();
  generateQuestionCard(currentQuestionIndex);
}

// Function to end the quiz
function endQuiz() {
  timerEl.textContent = "-:-"; // blank the timer
  currentScoreEl.textContent = "-"; // blank the current score
  clearQuizContainer();
  generateStatsCard();
}

// Function to reset quiz stats before starting/restarting the quiz
function resetQuizStats() {
  questionsAnswered = 0;
  correctAnswers = 0;
  currentQuestionIndex = 0;
}

// Function to start and update quiz timer, also monitors time remaing and ends quiz when time runs out
function startTimer() {
  timerEl.textContent = convertSecondsToMinutes(timeRemainingInSeconds); // set the quiz timer to whatever the default time limit is
  // setup an interval timer that runs every second
  let timerInterval = setInterval(function() {
    timeRemainingInSeconds--; // decrement time remaining by 1 second
    timerEl.textContent = convertSecondsToMinutes(timeRemainingInSeconds); // update the quiz timer to reflect the new time remaining
    // if remaining time reaches zero or all questions have been answered, then stop timer and end quiz
    if (timeRemainingInSeconds === 0 || questionsAnswered === totalQuestions) {
      clearInterval(timerInterval); // clear timer interval so timer will no longer be updated
      timeRemainingInSeconds = 0; // set time remaing to zero
      endQuiz();
    }
  }, 1000);
}

// Function to create quiz question card that takes 3 arguments: question, [choices], and answer
function generateQuestionCard(questionIndex) {
  let qCard = document.createElement("div"); // create div to serve as question card
  qCard.classList.add("card", "text-center", "qCard", "py-3"); // add class of card and text-center provided by bootstrap
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
    qCardChoiceButton.setAttribute('onclick',`selectAnswer("${questions[currentQuestionIndex].choices[i]}");`); // set onclick attribute to call selectAnswer function with choice text as argument
    qCardChoiceCol.appendChild(qCardChoiceButton); // append choice button to column
    qCardChoicesRow.appendChild(qCardChoiceCol); // append column with button to row of choices
  };

  qCardContainer.appendChild(qCard); // append question card to quiz container

};

function generateStatsCard() {
  let qCard = document.createElement("div"); // create div to serve as question card
  qCard.classList.add("card", "text-center", "qCard", "py-3"); // add class of card and text-center provided by bootstrap
  let qCardBody = document.createElement("div"); // create div to serve as question card body
  qCardBody.classList.add("card-body"); // add class of card-body provided by bootstrap
  qCard.appendChild(qCardBody); // append question card body to question card
  let qCardResults = document.createElement("h2"); // create h2 element to serve as question
  qCardResults.classList.add("card-title", "py-5") // add class of card-title provided by bootstrap
  qCardResults.textContent = "Here's how you did:"; // fill h2 element with question text
  qCardBody.appendChild(qCardResults); // append question to question card body
  let qCardStatsRow = document.createElement("div"); // create div to serve as row of choices
  qCardStatsRow.classList.add("row", "justify-content-center", "gy-4"); // add class of row and justfy-content-center provided by bootstrap
  qCardBody.appendChild(qCardStatsRow); // append row of choices to question card body
  
  // generate stats subcards to be appended to qCardStatsRow div
  generateStatsSubCard("You Answered:", `${questionsAnswered}/${totalQuestions}`, "Questions", qCardStatsRow);
  generateStatsSubCard("Final Score:", correctAnswers, "Points", qCardStatsRow);
  generateStatsSubCard("Your Rating:", determineRating(), "", qCardStatsRow);
  
   // append qCard and all children to qCard Container
  qCardContainer.appendChild(qCard); // append question card to quiz container
}

function determineRating () {

}

// Function that generates subcards within stats qCard at end of quiz
function generateStatsSubCard(label, value, description, parentElement) {

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
  statsSubCardLabel.textContent = label;
  statsSubCardBody.appendChild(statsSubCardLabel);
  // generate h1 element to serve as stats card value and append to card body
  let statsSubCardValue = document.createElement("h1");
  statsSubCardValue.textContent = value;
  statsSubCardBody.appendChild(statsSubCardValue);
  // generate h4 element to serve as stats card description and append to card body
  let statsSubCardDescription = document.createElement("h4");
  statsSubCardDescription.textContent = description;
  statsSubCardBody.appendChild(statsSubCardDescription);
  // append entire statsSubCardCol and all children to parentElement passed as function argument
  parentElement.appendChild(statsSubCardCol);
}

// This function fires anytime a correct answer is selected by user during quiz
function answeredCorrectly() {
  correctAnswers++; // increment correctAnsers by 1
  currentScoreEl.textContent = correctAnswers; // update current score element text content in navbar, reflecting that point was scored
  scoreCardDiv.className = "g2b-fading"; // add class of g2b-fading to scoreCardDiv to indicate that additional point was scored
  setTimeout(() => {scoreCardDiv.className = "";}, 500); // set timeout to remove class of g2b-fading after 500ms
  play("woohoo"); // play woohoo soundFX to alert user that they answered correctly
}

// This function fires anytime an incorrect answer is selected by user during quiz
function answeredIncorrectly() {
  timeRemainingInSeconds = timeRemainingInSeconds - 5; // decrement timeRemainingInSeconds by 5 as penalty for incorrect answer
    timerCardDiv.className = "r2b-fading"; // add class of r2b-fading to timerCardDiv to indicate that time penalty was applied
    setTimeout(() => {timerCardDiv.className = "";}, 500); // set timeout to remove class of r2b-fading after 500ms
    play("doh"); // play doh soundFX to alert user that they answered incorrectly
}

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
}

// Function to play sound effect, takes id of desired audio element as argument
function play(soundId) {
  var audio = document.getElementById(soundId);
  if (audio.paused) {
      audio.play();
  } else {
      audio.currentTime = 0
  }
}

