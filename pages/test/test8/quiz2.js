(function(){
  function buildQuiz(){

    // draw figures first
    drawFigures();

    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // draw figures first
    drawFigures();

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }


  // draw all figures for quiz
  function drawFigures() {

	var c = figureContainer
	var ctx = c.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(50, 300);
	ctx.lineTo(350, 300);
	ctx.moveTo(200, 300);
	ctx.lineTo(70, 230);
	ctx.moveTo(200, 300);
	ctx.lineTo(320, 230);
	ctx.stroke();

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("x\xB0", 125, 295);
	ctx.fillText("x\xB0", 255, 295);
	ctx.fillText("y\xB0", 195, 280);
	ctx.stroke();


	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("Figure 2.", 160, 350);
	ctx.stroke();
  } 

  const figureContainer = document.getElementById('figure2');
  const quizContainer = document.getElementById('quiz2');
  const resultsContainer = document.getElementById('results2');
  const submitButton = document.getElementById('submit2');
  const myQuestions = [
    {
      question: "If angle x = 40&deg;, what is the value of angle y?",
      answers: {
        a: "40",
        b: "80",
        c: "90",
        d: "100",
        e: "120"
      },
      correctAnswer: "d"
    },
    {
      question: "If angle y = 3x, what is the value of angle x?",
      answers: {
        a: "35",
        b: "36",
        c: "37",
        d: "38",
        e: "39"
      },
      correctAnswer: "b"
    }
  ];
 
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
