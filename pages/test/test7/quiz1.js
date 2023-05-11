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
	ctx.moveTo(200, 100);
	ctx.lineTo(50, 250);
	ctx.moveTo(200, 100);
	ctx.lineTo(350, 250);
	ctx.moveTo(50, 250);
	ctx.lineTo(350, 250);
	ctx.moveTo(190, 110);
	ctx.lineTo(200, 120);
	ctx.moveTo(200, 120);
	ctx.lineTo(210, 110);
	ctx.stroke();

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("A", 190, 90);
	ctx.fillText("B", 25, 260);
	ctx.fillText("C", 355, 260);
	ctx.stroke();


	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("Figure 1.", 160, 350);
	ctx.stroke();
  } 

  const figureContainer = document.getElementById('figure1');
  const quizContainer = document.getElementById('quiz1');
  const resultsContainer = document.getElementById('results1');
  const submitButton = document.getElementById('submit1');
  const myQuestions = [
    {
      question: "In the right triangle ABC, if angle A is 90 degree, AB = AC, what is the value of angle B",
      answers: {
        a: "180",
        b: "90",
        c: "60",
        d: "45",
        e: "30"
      },
      correctAnswer: "d"
    },
    {
      question: "In the right triangle ABC, if angle A is 90 degree, AB = AC, what is the value of angle C",
      answers: {
        a: "30",
        b: "45",
        c: "60",
        d: "90",
        e: "180"
      },
      correctAnswer: "b"
    },
    {
      question: "In the right triangle ABC, if angle A is 90 degree, AB = 10cm, what is the area of right triangle ABC",
      answers: {
        a: "200",
        b: "100",
        c: "50",
        d: "25",
        e: "10"
      },
      correctAnswer: "c"
    }
  ];
 
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
