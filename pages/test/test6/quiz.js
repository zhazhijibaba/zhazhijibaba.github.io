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

	var c = document.getElementById("figures");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(150, 150, 100, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150, 50);
	ctx.lineTo(150, 250);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(150, 150, 4, 0, 2 * Math.PI);
	ctx.fill();
	ctx.font = "25px Arial";
	ctx.fillText("C", 160, 160);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(150, 250, 4, 0, 2 * Math.PI);
	ctx.fill();
	ctx.font = "25px Arial";
	ctx.fillText("B", 142, 280);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(150, 50, 4, 0, 2 * Math.PI);
	ctx.fill();
	ctx.font = "25px Arial";
	ctx.fillText("A", 142, 40);
	ctx.stroke();

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillText("Figure 1.", 280, 150);
	ctx.stroke();
  } 

  const figureContainer = document.getElementById('figures');
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "For the circle shown with center C, if radius AC = r, which of the following is the diameter AB:",
      answers: {
        a: "<math><mi>0.5</mi><mi>r</mi></math>",
        b: "<math><mi>r</mi></math>",
        c: "<math><mi>2</mi><mi>r</mi></math>",
        d: "<math><mi>4</mi><mi>r</mi></math>",
        e: "<math><mi>4</mi><mi>&pi;</mi><mi>r</mi></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "For the circle shown with center C, if radius AC = 3, which of the following is the diameter AB:",
      answers: {
        a: "<math><mi>3</mi></math>",
        b: "<math><mi>6</mi></math>",
        c: "<math><mi>3</mi><mi>&pi;</mi></math>",
        d: "<math><mi>6</mi><mi>&pi;</mi></math>",
        e: "<math><mi>9</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "b"
    },
    {
      question: "For the circle shown with center C, if radius AC = r, which of the following is the circumference of the circle:",
      answers: {
        a: "<math><mi>2</mi><mi>r</mi></math>",
        b: "<math><mi>4</mi><mi>r</mi></math>",
        c: "<math><mi>&pi;</mi><mi>r</mi></math>",
        d: "<math><mi>2</mi><mi>&pi;</mi><mi>r</mi></math>",
        e: "<math><mi>4</mi><mi>&pi;</mi><mi>r</mi></math>"
      },
      correctAnswer: "d"
    },
    {
      question: "For the circle shown with center C, if radius AC = 4, which of the following is the circumference of the circle:",
      answers: {
        a: "<math><mi>4</mi></math>",
        b: "<math><mi>8</mi></math>",
        c: "<math><mi>4</mi><mi>&pi;</mi></math>",
        d: "<math><mi>8</mi><mi>&pi;</mi></math>",
        e: "<math><mi>16</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "d"
    },
    {
      question: "For the circle shown with center C, if diameter AB = 4, which of the following is the circumference of the circle:",
      answers: {
        a: "<math><mi>4</mi></math>",
        b: "<math><mi>8</mi></math>",
        c: "<math><mi>4</mi><mi>&pi;</mi></math>",
        d: "<math><mi>8</mi><mi>&pi;</mi></math>",
        e: "<math><mi>16</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "For the circle shown with center C, if radius AC = r, which of the following is the area of the circle:",
      answers: {
        a: "<math><msup><mi>r</mi><mi>2</mi></msup></math>",
        b: "<math><mi>&pi;</mi><msup><mi>r</mi><mi>2</mi></msup></math>",
        c: "<math><mi>2</mi><mi>&pi;</mi><msup><mi>r</mi><mi>2</mi></msup></math>",
        d: "<math><mi>&pi;</mi><mi>r</mi></math>",
        e: "<math><mi>2</mi><mi>&pi;</mi><mi>r</mi></math>",
      },
      correctAnswer: "b"
    },
    {
      question: "For the circle shown with center C, if radius AC = 4, which of the following is the area of the circle:",
      answers: {
        a: "<math><mi>16</mi></math>",
        b: "<math><mi>32</mi><mi>&pi;</mi></math>",
        c: "<math><mi>16</mi><mi>&pi;</mi></math>",
        d: "<math><mi>8</mi><mi>&pi;</mi></math>",
        e: "<math><mi>4</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "For the circle shown with center C, if diameter AB = 8, which of the following is the area of the circle:",
      answers: {
        a: "<math><mi>16</mi></math>",
        b: "<math><mi>32</mi><mi>&pi;</mi></math>",
        c: "<math><mi>16</mi><mi>&pi;</mi></math>",
        d: "<math><mi>8</mi><mi>&pi;</mi></math>",
        e: "<math><mi>4</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "For the circle shown with center C, if the area of the circle is <math><mi>9</mi><mi>&pi;</mi></math>, which of the following is the radius of the circle:",
      answers: {
        a: "<math><mi>9</mi></math>",
        b: "<math><mi>9</mi><mi>&pi;</mi></math>",
        c: "<math><mi>6</mi></math>",
        d: "<math><mi>3</mi></math>",
        e: "<math><mi>&pi;</mi></math>"
      },
      correctAnswer: "d"
    },
    {
      question: "For the circle shown with center C, if the area of the circle is <math><mi>9</mi><mi>&pi;</mi></math>, which of the following is the diameter of the circle:",
      answers: {
        a: "<math><mi>9</mi></math>",
        b: "<math><mi>9</mi><mi>&pi;</mi></math>",
        c: "<math><mi>6</mi></math>",
        d: "<math><mi>3</mi></math>",
        e: "<math><mi>&pi;</mi></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "For the circle shown with center C, if the area of the circle is <math><mi>25</mi><mi>&pi;</mi></math>, which of the following is the circumference of the circle:",
      answers: {
        a: "<math><mi>5</mi></math>",
        b: "<math><mi>5</mi><mi>&pi;</mi></math>",
        c: "<math><mi>10</mi></math>",
        d: "<math><mi>10</mi><mi>&pi;</mi></math>",
        e: "<math><mi>25</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "d"
    },
    {
      question: "Figure 1 shown represents the wheel on a model with center C. The radius of the wheel AC = 10cm. If the wheel has made 5 complete revolutions, then, of the following, which is the best estimate for the distance traveled by the wheel?",
      answers: {
        a: "50",
        b: "100",
        c: "150",
        d: "200",
        e: "300"
      },
      correctAnswer: "c"
    },
    {
      question: "For the circle shown with center C, if diameter AB = 6 inches, which of the following is the area, in square inches, of the circle?",
      answers: {
        a: "<math><mi>2</mi><mi>&pi;</mi></math>",
        b: "<math><mi>3</mi><mi>&pi;</mi></math>",
        c: "<math><mi>6</mi><mi>&pi;</mi></math>",
        d: "<math><mi>9</mi><mi>&pi;</mi></math>",
        e: "<math><mi>36</mi><mi>&pi;</mi></math>"
      },
      correctAnswer: "d"
    }
  ];
 
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
