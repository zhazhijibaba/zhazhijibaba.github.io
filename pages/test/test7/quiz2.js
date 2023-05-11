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
	ctx.lineTo(100, 250);
	ctx.moveTo(200, 100);
	ctx.lineTo(300, 250);
	ctx.moveTo(100, 250);
	ctx.lineTo(300, 250);
	ctx.stroke();

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("P", 190, 90);
	ctx.fillText("Q", 75, 260);
	ctx.fillText("R", 305, 260);
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
      question: "Triangle PQR is an isosceles triangle. PQ=QR. if angle Q = 40 degree, what is the value of angle P",
      answers: {
        a: "90",
        b: "80",
        c: "70",
        d: "60",
        e: "50"
      },
      correctAnswer: "c"
    },
    {
      question: "Triangle PQR is an isosceles triangle. PQ=QR. if angle Q = 40 degree, what is the value of angle R",
      answers: {
        a: "80",
        b: "70",
        c: "65",
        d: "60",
        e: "55"
      },
      correctAnswer: "b"
    },
    {
      question: "Triangle PQR is an isosceles triangle. Angle P = Angle R. If PQ= 90cm, what is the length of RQ",
      answers: {
        a: "90cm",
        b: "180cm",
        c: "45cm",
        d: "10cm",
        e: "9cm"
      },
      correctAnswer: "a"
    }
  ];
 
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
