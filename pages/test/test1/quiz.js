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
      question: "Which of the following decimals is the greatest?",
      answers: {
        a: "1.045",
        b: "1.456",
        c: "1.645",
        d: "1.654",
        e: "1.065"
      },
      correctAnswer: "d"
    },
    {
      question: "Calculate: 1.1 + 20.3 + 4.97",
      answers: {
        a: "7.11",
        b: "26.37",
        c: "25.47",
        d: "8.10",
        e: "71.1"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the value of 2.1 x 1.5 ?",
      answers: {
        a: "3150",
        b: "315",
        c: "31.5",
        d: "3.15",
        e: "0.315"
      },
      correctAnswer: "d"
    },
    {
      question: "Compute: <math><mfrac><mi>3</mi><mi>2</mi></mfrac></math> + <math><mfrac><mi>2</mi><mi>5</mi></mfrac></math> - <math><mfrac><mi>1</mi><mi>4</mi></mfrac></math>",
      answers: {
        a: "<math><mfrac><mi>1</mi><mi>5</mi></mfrac></math>",
        b: "<math><mfrac><mi>4</mi><mi>11</mi></mfrac></math>",
        c: "<math><mfrac><mi>33</mi><mi>20</mi></mfrac></math>",
        d: "<math><mfrac><mi>27</mi><mi>20</mi></mfrac></math>",
        e: "<math><mfrac><mi>4</mi><mi>3</mi></mfrac></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the value of <math><mfrac><mi>5</mi><mi>3</mi></mfrac> <mo>&divide</mo> <mfrac><mi>3</mi><mi>2</mi></mfrac></math> ?",
      answers: {
        a: "<math><mfrac><mi>10</mi><mi>9</mi></mfrac></math>",
        b: "<math><mfrac><mi>1</mi><mi>10</mi></mfrac></math>",
        c: "<math><mfrac><mi>9</mi><mi>10</mi></mfrac></math>",
        d: "<math><mfrac><mi>5</mi><mi>2</mi></mfrac></math>",
        e: "<math><mfrac><mi>10</mi><mi>1</mi></mfrac></math>"
      },
      correctAnswer: "a"
    },    
    {
      question: "Compute: <math><mi>8</mi><mo>&times</mo><mi>(-4)</mi><mo>&times</mo><mi>(-3)</mi></math>",
      answers: {
        a: "-32",
        b: "-27",
        c: "96",
        d: "32",
        e: "27"
      },
      correctAnswer: "c"
    },
    {
      question: "Simplify: <math><mi>6</mi><mo>+</mo><msup><mi>(-1)</mi><mi>2</mi></msup><mo>&times</mo><mi>(8+2)</mi></math>",
      answers: {
        a: "16",
        b: "15",
        c: "50",
        d: "60",
        e: "70"
      },
      correctAnswer: "a"
    },    
    {
      question: "Yesterday Jaaron ran 5.1 kilometers. Today he ran 2.01 kilometers. How many more kilometers did he run yesterday than today?",
      answers: {
        a: "1.40",
        b: "1.50",
        c: "2.09",
        d: "3.09",
        e: "3.11"
      },
      correctAnswer: "d"
    },    
    {
      question: "Karen has <math><mfrac><mi>1</mi><mi>3</mi></mfrac></math> of a pie and Mara has <math><mfrac><mi>1</mi><mi>4</mi></mfrac></math> of the pie. What is the total fraction of the pie that Karen and Mara have?",
      answers: {
        a: "<math><mfrac><mi>1</mi><mi>6</mi></mfrac></math>",
        b: "<math><mfrac><mi>1</mi><mi>2</mi></mfrac></math>",
        c: "<math><mfrac><mi>7</mi><mi>12</mi></mfrac></math>",
        d: "<math><mfrac><mi>5</mi><mi>6</mi></mfrac></math>",
        e: "<math><mfrac><mi>4</mi><mi>3</mi></mfrac></math>"
      },
      correctAnswer: "c"
    },
    {
      question: "A bookstore receives a shipment of 120 books. Of the books,  <math><mfrac><mi>1</mi><mi>3</mi></mfrac></math> are hardcover, and the rest are paperback. Of the paperback books, <math><mfrac><mi>3</mi><mi>4</mi></mfrac></math> are fiction. How many paperback fiction books are in the shipment?",
      answers: {
        a: "20",
        b: "30",
        c: "40",
        d: "60",
        e: "80"
      },
      correctAnswer: "d"
    }, 
    {
      question: "An elevator in a building is currently on floor 21. After the elevator goes up 8 fllors, down 5 floors, the up 4 floors, on which floor will the elevator be located?",
      answers: {
        a: "9",
        b: "14",
        c: "20",
        d: "30",
        e: "28"
      },
      correctAnswer: "e"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
