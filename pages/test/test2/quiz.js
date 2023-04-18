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
      question: "Synonyms: POISE",
      answers: {
        a: "creativity",
        b: "respect",
        c: "sympathy",
        d: "composure",
        e: "secrecy"
      },
      correctAnswer: "d"
    },
    {
      question: "Synonyms: BRANDISH",
      answers: {
        a: "shout",
        b: "wave",
        c: "emerge",
        d: "struggle",
        e: "lable"
      },
      correctAnswer: "b"
    },
    {
      question: "Synonyms: RADIANT",
      answers: {
        a: "youthful",
        b: "successful",
        c: "impressive",
        d: "glowing",
        e: "peaceful"
      },
      correctAnswer: "d"
    },
    {
      question: "Synonyms: VERSATILE",
      answers: {
        a: "vigilant",
        b: "adaptable",
        c: "friendly",
        d: "pietic",
        e: "wise"
      },
      correctAnswer: "b"
    },
    {
      question: "Synonyms: WAFT",
      answers: {
        a: "jut",
        b: "dive",
        c: "drift",
        d: "paddle",
        e: "explore"
      },
      correctAnswer: "c"
    },
    {
      question: "Synonyms: SWAGGER",
      answers: {
        a: "fall",
        b: "strut",
        c: "guzzle",
        d: "mumble",
        e: "bet"
      },
      correctAnswer: "b"
    },
    {
      question: "Synonyms: SCURRY",
      answers: {
        a: "rush",
        b: "bluff",
        c: "topple",
        d: "scribble",
        e: "disperse"
      },
      correctAnswer: "a"
    },
    {
      question: "Synonyms: EGREGIOUS",
      answers: {
        a: "socialbe",
        b: "pitiful",
        c: "flagrant",
        d: "contemplative",
        e: "communicable"
      },
      correctAnswer: "c"
    },
    {
      question: "Analogies: Shore is to island as",
      answers: {
        a: "are is to circle",
        b: "membrane is to cell",
        c: "orbit is to satellite",
        d: "element is to compound",
        e: "scale is to note"
      },
      correctAnswer: "b"
    },
    {
      question: "Analogies: Tether is to restrain as",
      answers: {
        a: "pen is to erase",
        b: "freezer is to shiver",
        c: "book is to write",
        d: "bracket is to support",
        e: "loaf is to slice"
      },
      correctAnswer: "d"
    },
    {
      question: "Analogies: Knoll is to mountain as",
      answers: {
        a: "leaf is to tree",
        b: "grass is to meadow",
        c: "pond is to lake",
        d: "valley is to plateau",
        e: "ocean is to wave"
      },
      correctAnswer: "c"
    },
    {
      question: "Analogies: Grimace is to pain as",
      answers: {
        a: "nod is to agreement",
        b: "cheer is to victory",
        c: "scowl is to frown",
        d: "laught is to joke",
        e: "clench is to fist"
      },
      correctAnswer: "a"
    },
    {
      question: "Analogies: Chaos is to orderly as",
      answers: {
        a: "bravery is to confident",
        b: "weather is to climatic",
        c: "music is to soothing",
        d: "danger is to safe",
        e: "evidence is to persuasive"
      },
      correctAnswer: "d"
    },
    {
      question: "Analogies: Clamorous is to quiet as",
      answers: {
        a: "acrid is to bitter",
        b: "dull is to smooth",
        c: "savory is to delicious",
        d: "tepid is to bland",
        e: "brilliant is to dim"
      },
      correctAnswer: "e"
    },
    {
      question: "Analogies: Zeal is to enthusiasm as",
      answers: {
        a: "delight is to sorrow",
        b: "patience is to irritation",
        c: "terror is to speechlessness",
        d: "curiousity is to openness",
        e: "bliss is to happiness"
      },
      correctAnswer: "e"
    },
    {
      question: "Analogies: Chassis is to car as",
      answers: {
        a: "frame is to house",
        b: "trunk is to tire",
        c: "address is to mailbox",
        d: "intersection is to traffic",
        e: "furniture is to room"
      },
      correctAnswer: "a"
    },
    {
      question: "Analogies: Bewilder is to confusion as",
      answers: {
        a: "surprise is to boredom",
        b: "befriend is to discord",
        c: "reprimand is to pride",
        d: "threaten is to fear",
        e: "accuse is to suspicion"
      },
      correctAnswer: "d"
    },
    {
      question: "Analogies: Resist is to passive as",
      answers: {
        a: "stretch is to flexible",
        b: "hurry is to careless",
        c: "grumble is to satisfied",
        d: "investigate is to energetic",
        e: "empathize is to tolerant"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
