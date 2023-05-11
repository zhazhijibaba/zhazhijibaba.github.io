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
	ctx.moveTo(50, 100);
	ctx.lineTo(50, 280);
	ctx.moveTo(50, 100);
	ctx.lineTo(410, 280);
	ctx.moveTo(50, 280);
	ctx.lineTo(410, 280);
	ctx.moveTo(50, 220);
	ctx.lineTo(290, 220);

	ctx.moveTo(50, 210);
	ctx.lineTo(60, 210);
	ctx.moveTo(60, 210);
	ctx.lineTo(60, 220);

	ctx.moveTo(50, 270);
	ctx.lineTo(60, 270);
	ctx.moveTo(60, 270);
	ctx.lineTo(60, 280);
	ctx.stroke();

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("A", 50, 90);
	ctx.fillText("B", 25, 290);
	ctx.fillText("C", 420, 290);
	ctx.fillText("D", 25, 220);
	ctx.fillText("E", 295, 220);
	ctx.stroke();


	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("Figure 3.", 160, 450);
	ctx.stroke();
  } 

  const figureContainer = document.getElementById('figure3');
  const quizContainer = document.getElementById('quiz3');
  const resultsContainer = document.getElementById('results3');
  const submitButton = document.getElementById('submit3');
  const myQuestions = [
    {
      question: "In right triangle ABC and right triangle ADE, the angle ADE = 90 degree and the angle ABC = 90 degree. if the angle AED = 40 degree, what is the value of angle ACB in degree?",
      answers: {
        a: "30",
        b: "40",
        c: "50",
        d: "60",
        e: "90"
      },
      correctAnswer: "b"
    },
    {
      question: "In right triangle ABC and right triangle ADE, the angle ADE = 90 degree and the angle ABC = 90 degree. if AD = 2, DB = 1 and BC = 6, what is the length of DE?",
      answers: {
        a: "6",
        b: "5",
        c: "4",
        d: "3",
        e: "2"
      },
      correctAnswer: "c"
    },
    {
      question: "In right triangle ABC and right triangle ADE, the angle ADE = 90 degree and the angle ABC = 90 degree. if AD = 2, DB = 1 and AC = 12, what is the length of AE?",
      answers: {
        a: "12",
        b: "11",
        c: "10",
        d: "9",
        e: "8"
      },
      correctAnswer: "e"
    },
    {
      question: "In right triangle ABC and right triangle ADE, the angle ADE = 90 degree and the angle ABC = 90 degree. if AD = 2, DB = 1 and AC = 12, what is the length of EC?",
      answers: {
        a: "12",
        b: "10",
        c: "8",
        d: "4",
        e: "3"
      },
      correctAnswer: "d"
    },
    {
      question: "In right triangle ABC and right triangle ADE, the angle ADE = 90 degree and the angle ABC = 90 degree. if AD = 2, DB = 1 and BC = 6, what is the area of triangle ADE?",
      answers: {
        a: "9",
        b: "8",
        c: "4",
        d: "3",
        e: "18"
      },
      correctAnswer: "c"
    }
  ];
 
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
