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
	ctx.moveTo(50, 200);
	ctx.lineTo(450, 200);
	ctx.moveTo(50, 350);
	ctx.lineTo(450, 350);
	ctx.moveTo(200, 100);
	ctx.lineTo(100, 400);
	ctx.moveTo(200, 100);
	ctx.lineTo(350, 400);
	ctx.stroke();

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("A", 190, 90);
	ctx.fillText("B", 150, 190);
	ctx.fillText("C", 250, 190);
	ctx.fillText("D", 100, 340);
	ctx.fillText("E", 330, 340);
	ctx.stroke();


	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("Figure 3.", 160, 450);
	ctx.stroke();
  } 

  const figureContainer = document.getElementById('figure4');
  const quizContainer = document.getElementById('quiz4');
  const resultsContainer = document.getElementById('results4');
  const submitButton = document.getElementById('submit4');
  const myQuestions = [
    {
      question: "Line BC is parallel to line DE. If the angle BAC = 50&deg; and angle ABC = 60&deg;. What is the value of angle AED in degree?",
      answers: {
        a: "50",
        b: "60",
        c: "70",
        d: "80",
        e: "90"
      },
      correctAnswer: "c"
    },
    {
      question: "Line BC is parallel to line DE. If AC = 20cm, CE = 30cm and DE = 60cm, what is the length of BC in cm",
      answers: {
        a: "20",
        b: "24",
        c: "25",
        d: "30",
        e: "60"
      },
      correctAnswer: "b"
    }
  ];
 
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
