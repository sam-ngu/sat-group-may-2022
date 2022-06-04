const startGameButton = document.getElementById('start-game');
const sectionTimer = document.getElementById('section-timer');
const timerEl = document.getElementById('timer')
const sectionQuestion = document.getElementById('section-question');

const sectionLanding = document.getElementById('section-landing');
const sectionEndGame = document.getElementById('section-end-game');

const questionTitleEl = document.getElementById('question-title');
const questionChoices = document.getElementById('question-choices');




let timeRemaining = 3;
let timerId;



function renderQuestion(questionIndex){

  // get the question
  const question = questions[questionIndex]

  // create the structure
  // set the question title
  questionTitleEl.textContent = question.title;


  // set the choices
  const choices = question.choices;
  questionChoices.textContent = "";

  for (let index = 0; index < choices.length; index++) {
    const choice = choices[index];

      // <li>
      //   <button class="question-choice">Good</button>
      // </li>;

    const li = document.createElement('li');

    const button = document.createElement('button');



    button.setAttribute('class', 'question-choice');
    button.textContent = choice.title;


    button.addEventListener('click', function(event){
      // question
      // user click on choice

      // if user click on the correct answer
      if(choice.isAnswer){
        // give feedback correct



      }else{
        // if user click on the wrong answer
        // deduct 10 sec away from timer
        timeRemaining = timeRemaining - 10;

        // show feedback -- wrong

      }
      // if user click on the choice of the final question
      const nextQuestionIndex = questionIndex + 1;

      if(nextQuestionIndex >= questions.length){
        // end game
        return endGame()
      }


      // move on to the next question
      renderQuestion(nextQuestionIndex);
      


    });


    li.appendChild(button);

    questionChoices.append(li);
  }



}





// when i click on the start button
startGameButton.addEventListener('click', function(event){
  // start the timer
  timerEl.textContent = timeRemaining;
  startTimer();
  // show the question
  sectionQuestion.classList.remove('hide');
  // hide the landing
  sectionLanding.classList.add('hide');
  
  renderQuestion(0);

})

function endGame(){
  // (show the end game screen)
  sectionEndGame.classList.remove('hide');
  // hide question section
  sectionQuestion.classList.add('hide');

  // hide timer
  sectionTimer.classList.add('hide');

  // stop the timer
  clearInterval(timerId);
}

function startTimer(){
  // timer
  // show the timer
  sectionTimer.classList.remove('hide');
  // once the timer starts
  timerId = setInterval(function(){
    // we will subtract 1 from the current timer count
    timeRemaining = timeRemaining - 1;
    // and update the dom for every passing sec
    timerEl.textContent = timeRemaining;

    // if timer expires while the game is not completed yet
    if (timeRemaining <= 0){

      // end game 
      endGame();

    }
  }, 1000);

}









// end game

// render the highscore in the dom

// user type in initials in the input box


// user hit enter key 
// get the user initials & highscore
// save

// if user didnt type in anything in the input box
// do not save, show an error message in the dom

// user click on the save button
// get the user initials & highscore
// save


// once we save
// go to the highscore page




// highscore page
// generate the highscore list

// if user clicked on the back to home button
// go back to the landing page

