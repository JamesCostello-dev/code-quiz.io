const body = document.body;

let container = document.createElement('div');
body.appendChild(container);

let header1 = document.createElement('h1');
container.appendChild(header1);

let header2 = document.createElement('h2');
header2.textContent = 'You will have 60 seconds to answer all the questions.  Click start when ready.';
container.appendChild(header2);

let button = document.createElement('button');
button.textContent = 'Start';
body.appendChild(button);

let buttonDiv = document.createElement('div');
body.appendChild(buttonDiv);

let button1 = document.createElement('hide');
buttonDiv.appendChild(button1)

let button2 = document.createElement('hide');
buttonDiv.appendChild(button2)

let button3 = document.createElement('hide');
buttonDiv.appendChild(button3)

let button4 = document.createElement('hide');
buttonDiv.appendChild(button4)


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


const select = document.querySelector('button');


function quiz () {
  
  for (let i = 0; i < questions.length; i++) {
    
    let newheader2 = document.createElement('h2');
    newheader2.innerText = questions[i].question;
    header2.replaceWith(newheader2);
    
    let newbutton1 = document.createElement('button');
    newbutton1.innerText = questions[i].option[0];
    button1.replaceWith(newbutton1);
    
    let newbutton2 = document.createElement('button');
    newbutton2.innerText = questions[i].option[1];
    button2.replaceWith(newbutton2);
    
    let newbutton3 = document.createElement('button');
    newbutton3.innerText = questions[i].option[2];
    button3.replaceWith(newbutton3);
    
    let newbutton4 = document.createElement('button');
    newbutton4.innerText = questions[i].option[3];
    button4.replaceWith(newbutton4);
    
    let hide = document.createElement('hide');
    button.replaceWith(hide);

  }

}

function countdown() {
  let count = 60;
  
  let timer = document.createElement('h1');
  header1.replaceWith(timer);
  
  let timeInt = setInterval(function() {
    if (count > 1) {
      timer.textContent = count;
      count--;
    } else if (count === 1) {
      timer.textContent = count;
      count--;
    } else {
      timer.textContent = '';
      clearInterval(timeInt);
    }
    
  }, 1000);
  
}


function start () {
  countdown();
  quiz();
}

select.addEventListener('click', start)

