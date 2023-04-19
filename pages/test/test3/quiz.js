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
      question: "Which of the following is divisible by 15?",
      answers: {
        a: "159",
        b: "225",
        c: "415",
        d: "560",
        e: "663"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is the least common multiple of 18, 24, 60?",
      answers: {
        a: "6",
        b: "72",
        c: "120",
        d: "360",
        e: "720"
      },
      correctAnswer: "d"
    },
    {
      question: "How many prime numbers are between 30 and 60?",
      answers: {
        a: "7",
        b: "8",
        c: "9",
        d: "10",
        e: "11"
      },
      correctAnswer: "a"
    },
    {
      question: "If k is an odd number, which of the following is an even number?",
      answers: {
        a: "k + 2",
        b: "k - 10",
        c: "3k + 1",
        d: "4k - 1",
        e: "k(k+4)"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is NOT a factor of <math><mi>60</mi><mo>&times</mo><mi>33</mi></math>",
      answers: {
        a: "12",
        b: "20",
        c: "36",
        d: "40",
        e: "55"
      },
      correctAnswer: "d"
    },
    {
      question: "A school reports a student-to-teacher ratio of 6:1. How many students does the school have, if there are 45 teachers in the school?",
      answers: {
        a: "285",
        b: "270",
        c: "225",
        d: "151",
        e: "51"
      },
      correctAnswer: "b"
    },
    {
      question: "A train traveled 100 miles from City W to City X in 2 hours. The train then traveled 120 miles from City X to City Y in 80 minutes. What was the average speed, in miles per hour, at which the train traveled from City W to City Y?",
      answers: {
        a: "53",
        b: "66",
        c: "70",
        d: "73",
        e: "80"
      },
      correctAnswer: "b"
    },
    {
      question: "A length of 100 meters is closest to which of the following lengths, in inches? (1 inch is approximately equal to 2.5 centimeters.)",
      answers: {
        a: "40",
        b: "250",
        c: "400",
        d: "2500",
        e: "4000"
      },
      correctAnswer: "e"
    },
    {
      question: "Two friends went out to lunch and split the cost equally. The meal's cost was $20.40. Tax is an additional 5% on the meal's cost. The friends decide to leave 20% of the meal's cost(not including tax) for a tip. How much will each friend spend on the meal?",
      answers: {
        a: "$10.33",
        b: "$12.64",
        c: "$12.75",
        d: "$21.42",
        e: "$25.50"
      },
      correctAnswer: "c"
    },
    {
      question: "After changing the number 20 by a certain percent, the result is 50. Which of the following represents this percent change?",
      answers: {
        a: "A decrease of 40%",
        b: "An increase of 30%",
        c: "An increase of 60%",
        d: "An increase of 150%",
        e: "An increase of 250%"
      },
      correctAnswer: "d"
    },
    {
      question: "Of the following, which is closest to <math><mi>110.2</mi><mo>&times</mo><mi>39.998</mi></math>?",
      answers: {
        a: "8000",
        b: "4400",
        c: "4000",
        d: "3300",
        e: "3000"
      },
      correctAnswer: "b"
    },
    {
      question: "Each morning from Monday through Friday, Mr. Ruiz travels 19.8 miles to work. After work, he travels 10.1 miles to a local gym. Then he travels home a distance of 9.9 miles. Of the following, which is closest to the total number of miles Mr. Ruiz travels Monday through Friday?",
      answers: {
        a: "100",
        b: "150",
        c: "200",
        d: "250",
        e: "300"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
