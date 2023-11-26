let nameInput = localStorage.getItem('nameInput');
let answer;
let img = document.getElementById('images');
let line = document.getElementById('lines');
let toggle = 0;
let imagePaths = ['0.png','1.png', '2.png', '3.png', '4.png', '5.png', '6.png','7.png'];
function userName() {
  let popBox = document.getElementById('pop');
  popBox.style.display = 'block';
}
function userAnswer(){
  let popBox = document.getElementById('pop');
}
function executePageSpecificFunction() {
  let currentPage = window.location.href;
  if (currentPage.includes("2.html") | currentPage.includes("3.html") | currentPage.includes("4.html")| currentPage.includes("5.html")| currentPage.includes("6.html") | currentPage.includes("7.html")) {
    userAnswer();
  }
}

function submitAnswer() {
  let popBox = document.getElementById('pop');
  popBox.classList.add('shake');
  setTimeout(function() {
    popBox.classList.remove('shake');
  }, 500);

  let promptContainer = document.getElementById('prompt-container');
  let promptText = document.createElement('h2');
  let promptButton = document.createElement('button');
  promptText.textContent = "WRONG ANSWER!!";
  promptButton.textContent = "Look at other evidence";
  promptButton.addEventListener('click', function () {
    let currentPage = window.location.href;
    if (currentPage.includes("2.html")) {
      window.location.href = "3.html";
    } else if (currentPage.includes("3.html")) {
      window.location.href = "4.html";
    } else if (currentPage.includes("4.html")) {
      window.location.href = "5.html";
    } else if (currentPage.includes("5.html") || currentPage.includes("6.html")) {
      window.location.href = "7.html";
    } else if (currentPage.includes("7.html")) {
      window.location.href = "8.html";
  }
  }); 
  promptContainer.appendChild(promptText);
  promptContainer.appendChild(promptButton);
}

window.onload = executePageSpecificFunction();

function submitName() {
  nameInput = document.getElementById('nameInput').value;
  localStorage.setItem('nameInput', nameInput);
  window.location.href = "1.html";
}
let dialogue = [
  "Welcome Professor ","", "Please make this office your home.", "[You start putting your belongings]", 
  "[You open a drawer]", "I wonder what this is. Oh there is a note!"
];

img.addEventListener('click', function () {
  if (toggle == 0) {
    line.textContent = "Welcome Professor " + nameInput + " to Illburn High School! Thank you so much for filling in last minute. Let me direct you to your office...";
  } else {
    line.textContent = dialogue[toggle]; 
  }
  toggle = (toggle + 1);
  img.src = imagePaths[toggle];
  if (toggle==7){
    onclick = location.replace("2.html");
  }
});



