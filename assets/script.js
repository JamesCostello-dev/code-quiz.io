const body = document.body;

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    option: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    option: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    option: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    option: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
    option: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

let i = 0
let score = 0;

const time = document.getElementById('time');

const title = document.getElementById('title');

const start = document.getElementById('start');

const opt0 = document.getElementById('opt0');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');


const quiz = document.addEventListener('click', function go () {

    countdown();

    start.remove(start);

   if (i === questions.length) {
     end;
   } else {
     next;
   }

});

const next = document.addEventListener('click', function getNext () {

  if (i < questions.length - 1) {
    i++;
  } else {
    end();
  }

    title.textContent = questions[i].question;
    opt0.textContent = questions[i].option[0];
    opt1.textContent = questions[i].option[1];
    opt2.textContent = questions[i].option[2];
    opt3.textContent = questions[i].option[3];

});

// end

const end = () => {
  alert('Quiz is over!')
}


const countdown = () => {
  let count = 60;
  
  let timer = setInterval(function() {
    if (count > 1) {
      time.textContent = count;
      count--;
    } else if (count === 1) {
      time.textContent = count;
      count--;
    } else {
      time.textContent = '';
      clearInterval(timer);
      alert('Sorry you ran out of time!');
    }
    
  }, 1000);
  
}