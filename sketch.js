// Create a data portrait out of personal habits.

let x = 0;
let y = 0;
let newDay = 0;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Week Complete'];
let day;
let rotateInterval;
let sunInterval;
let monInterval;
let tueInterval;
let wedInterval;
let thuInterval;
let friInterval;
let satInterval;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  day = days[0];
  setTimeout(sun, 4000);
  setTimeout(mon, 8000);
  setTimeout(tue, 12000);
  setTimeout(wed, 16000);
  setTimeout(thu, 20000);
  setTimeout(fri, 24000);
  setTimeout(sat, 28000);
  rotateInterval = setInterval(rotateGraph, 4000);
  sunInterval = setInterval(sunHabits, 1000);
  monInterval = setInterval(monHabits, 8000);
  tueInterval = setInterval(tueHabits, 12000);
  wedInterval = setInterval(wedHabits, 16000);
  thuInterval = setInterval(thuHabits, 20000);
  friInterval = setInterval(friHabits, 24000);
  satInterval = setInterval(satHabits, 28000);
  textAlign(CENTER, CENTER);
}

function rotateGraph() {
  newDay += -51.43; 
}

// COLOR + COORDINATES FOR HABITS BY DAY
function sunHabits() {
  fill('skyblue');
  //ellipse(x, y, w)
  ellipse(0, -200, 20);
  fill('yellow');
  ellipse(0, -150, 20);
  fill('red');
  ellipse(0, -100, 20);
  fill('lightgreen');
  ellipse(0, -50, 20);
}

function monHabits() {
  fill('skyblue');
  ellipse(0, -200, 20);
  fill('red');
  ellipse(0, -100, 20);
  fill('lightgreen');
  ellipse(0, -50, 20);
}

function tueHabits() {
  fill('skyblue');
  ellipse(0, -200, 20);
}

function wedHabits() {
  fill('skyblue');
  ellipse(0, -200, 20);
  fill('yellow');
  ellipse(0, -150, 20);
  fill('red');
  ellipse(0, -100, 20);
  fill('lightgreen');
  ellipse(0, -50, 20);
}

function thuHabits() {
  fill('skyblue');
  ellipse(0, -200, 20);
}

function friHabits() {
  fill('skyblue');
  ellipse(0, -200, 20);
  fill('yellow');
  ellipse(0, -150, 20);
  fill('red');
  ellipse(0, -100, 20);
  fill('lightgreen');
  ellipse(0, -50, 20);
}

function satHabits() {
  fill('skyblue');
  ellipse(0, -200, 20);
  fill('yellow');
  ellipse(0, -150, 20);
  fill('lightgreen');
  ellipse(0, -50, 20);
}


// FUNCTION TO DRAW HABITS BY DAY
function sundayData() {
  if (newDay === 0) {
    sunHabits();
  }
}

function mondayData() {
  if(newDay === -51.43) {
    monHabits();
  }
}

function tuesdayData() {
  if(newDay === -102.86) {
    tueHabits();
  }
}

function wednesdayData() {
  if(newDay === -154.29) {
    wedHabits();
  }
}

function thursdayData() {
  if(newDay === -205.72) {
    thuHabits();
  }
}

function fridayData() {
  if(newDay === -257.15) {
    friHabits();
  }
}

function saturdayData() {
  if(newDay === -308.58) {
    satHabits();
  }
}

function draw() {
  background(200);
  // DAYS OF THE WEEK LABELS
  textSize(26);
  noStroke();
  fill('#333');
  text(day, 300, 33);
    
  // DRAW POINTER
  fill('#333');
  noStroke();
  triangle(270, 60, 300, 90, 330, 60);
  
  translate(300, 320);
  push();
  rotate(newDay);
  
  // DRAW GRAPH
  noFill();
  stroke('#333');
  strokeWeight(2.5);
  graph();
  pop();

  // DRAW GRAPH KEY
  graphKey();
  stop();

  // DRAW WEEKLY HABITS BY DAY
  sundayData();
  mondayData();
  tuesdayData();
  wednesdayData();
  thursdayData();
  fridayData();
  saturdayData();
}

// LABEL FUNCTIONS
function sun() {
  day = days[1];
}

function mon() {
  day = days[2];
}

function tue() {
  day = days[3];
}

function wed() {
  day = days[4];
}

function thu() {
  day = days[5];
}

function fri() {
  day = days[6];
}

function sat() {
  day = days[7];
}

function all() {
  day = days[8];
}

// GRAPH FUNCTIONS
function graph() {
   for(let i = 0; i < 500; i+= 100) {
     ellipse(x, y, i);
  }
}


function graphKey() {
  // DRAW RECT BKGD
  noFill();
  stroke('#333');
  strokeWeight(1.8);
  rect(-288, 167, 155, 102);
  // BIBLE STUDY
  textSize(16);
  noStroke();
  fill('#333');
  text('Bible Study', -241, 181);
  stroke('#333');
  fill('skyblue');
  ellipse(-147, 181, 16);
  // COFFEE
  noStroke();
  fill('#333');
  text('Coffee', -258, 206);
  stroke('#333');
  fill('yellow');
  ellipse(-147, 206, 16);
  // EXERCISE
  noStroke();
  fill('#333');
  text('Exercise', -251, 231);
  stroke('#333');
  fill('red');
  ellipse(-147, 231, 16);
  // READ
  noStroke();
  fill('#333');
  text('Read', -264, 256);
  stroke('#333');
  fill('lightgreen');
  ellipse(-147, 256, 16);
}

function stop() {
  if (newDay === -360.01) { 
    clearInterval(rotateInterval);
  }
}

