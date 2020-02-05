(function() {
  //array with object literals of the questions
    const myQuestions = [
      {
        question: "Окончателното сглобяване на iPhone на Apple става на кое от следните места?",
        answers: { 
          А: "САЩ",
          Б: "Южна Корея",
          В: "Китай"
        },
        correctAnswer: "В"
      },
      {
        question: " Коя от следните индустрии е най-засегната от глобализацият?",
        answers: {
          А: "Телекомуникации",
          Б: "Производство",
          В: "Транспорт"
        },
        correctAnswer: "Б"
      },
      {
        question: "Skullcandy избра софтуер за планиране от кой от следните доставчици на ERP:",
        answers: {
          А: "Oracle",
          Б: "Microsoft",
          В: "IBM",
          Г: "SAP"
        },
        correctAnswer: "Г"
      }
    ];
  
    function buildQuiz() {
      //array to store the HTML output
      const output = [];
  
      // for each question
      myQuestions.forEach((currentQuestion, questionNumber) => {
        //array to store the list of answer choices
        const answers = [];
  
        // and for each available answer
        for (letter in currentQuestion.answers) {
          // add an radio button
          answers.push(
            ` <input type="radio" name="question${questionNumber}" value="${letter}">
            <label>
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      //  output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
          answerContainers[questionNumber].style.color = "#ccc";
        } else {
          // if answer is wrong or blank
          answerContainers[questionNumber].style.color = "#f17db2";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    
    //slide display
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
  