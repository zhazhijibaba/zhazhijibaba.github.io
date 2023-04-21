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
    },
    {
      question: "A train traveled 100 miles from City W to City X in 4 hours. The train then traveled 105 miles from City X to City Y in 180 minutes. What was the average speed, in miles per hour, at which the train traveled from City W to City Y?",
      answers: {
        a: "20",
        b: "25",
        c: "30",
        d: "35",
        e: "40"
      },
      correctAnswer: "c"
    },
    {
      question: "A boy walked 10 miles from home to school in 2 hours. The boy then walked 6 miles from school to  library in 3 hours. What was the average speed, in miles per hour, at which the boy walked from home to library?",
      answers: {
        a: "2",
        b: "2.5",
        c: "3",
        d: "3.5",
        e: "5"
      },
      correctAnswer: "d"
    },
    {
      question: "Two friends went out to lunch and split the cost equally. The meal's cost was $10.40. Tax is an additional 5% on the meal's cost. The friends decide to leave 20% of the meal's cost(not including tax) for a tip. How much will each friend spend on the meal?",
      answers: {
        a: "$5.20",
        b: "$6.24",
        c: "$6.50",
        d: "$12.48",
        e: "$13.00"
      },
      correctAnswer: "c"
    },
    {
      question: "Two friends went out to lunch and split the cost equally. The meal's cost was $20.40. Tax is an additional 10% on the meal's cost. The friends decide to leave 20% of the meal's cost(not including tax) for a tip. How much will each friend spend on the meal?",
      answers: {
        a: "$10.20",
        b: "$11.22",
        c: "$12.24",
        d: "$13.26",
        e: "$26.52"
      },
      correctAnswer: "d"
    },
    {
      question: "After changing the number 20 by a certain percent, the result is 40. Which of the following represents this percent change?",
      answers: {
        a: "A decrease of 50%",
        b: "An increase of 50%",
        c: "An increase of 100%",
        d: "An increase of 200%",
        e: "An increase of 400%"
      },
      correctAnswer: "c"
    },
    {
      question: "After changing the number 40 by a certain percent, the result is 50. Which of the following represents this percent change?",
      answers: {
        a: "A decrease of 10%",
        b: "An increase of 10%",
        c: "An increase of 20%",
        d: "An increase of 25%",
        e: "An increase of 30%"
      },
      correctAnswer: "d"
    },
    {
      question: "After changing the number 50 by a certain percent, the result is 40. Which of the following represents this percent change?",
      answers: {
        a: "A decrease of 10%",
        b: "A decrease of 20%",
        c: "A decrease of 25%",
        d: "A decrease of 30%",
        e: "An increase of 10%"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
