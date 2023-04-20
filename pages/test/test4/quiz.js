(function(){
  function buildQuiz(){
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

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Which of the following is the least common multiple of 60 and 70?",
      answers: {
        a: "60",
        b: "210",
        c: "420",
        d: "630",
        e: "840"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is the least common multiple of 8, 15 and 30?",
      answers: {
        a: "8",
        b: "30",
        c: "60",
        d: "120",
        e: "240"
      },
      correctAnswer: "d"
    },
    {
      question: "How many prime numbers are between 1 and 10?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      correctAnswer: "d"
    },
    {
      question: "How many prime numbers are between 10 and 20?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      correctAnswer: "d"
    },
    {
      question: "How many prime numbers are between 20 and 30?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      correctAnswer: "b"
    },
    {
      question: "How many prime numbers are between 30 and 40?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is NOT a factor of <math><mi>20</mi><mo>&times</mo><mi>80</mi></math>",
      answers: {
        a: "64",
        b: "25",
        c: "50",
        d: "160",
        e: "120"
      },
      correctAnswer: "e"
    },
    {
      question: "Which of the following is NOT a factor of <math><mi>18</mi><mo>&times</mo><mi>30</mi></math>",
      answers: {
        a: "27",
        b: "36",
        c: "40",
        d: "54",
        e: "90"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is NOT a factor of <math><mi>30</mi><mo>&times</mo><mi>35</mi></math>",
      answers: {
        a: "80",
        b: "70",
        c: "75",
        d: "50",
        e: "42"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
