
// initialize variables
var fromColor;
var tooColor;
var inBetweenColor;
var scaledVal;

// var sourceText = "Loading";


let t = 0; // time variable
var randomColor;
var speed;

function setup() {

  createCanvas(windowWidth, windowHeight);

  noStroke();

  // randomColor = color(random(255), random(255), random(255));
  // fill(randomColor);

  // color on the left
  fromColor = color(55);
  // target color on the right
  tooColor = color(10);
  // result color
  inBetweenColor = color(0);
  // position between the colors.
	scaledVal = 0;

}


function draw() {


  fill(255);
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 14);
  text("Ready?", width/2, height/2);

  // var left = middle - ((mouseX / windowWidth) * middle);
  // var right = middle + ((mouseX / windowWidth) * middle);
  // text(
  //  sourceText.substring(left, right), width/2, height/2);


  // remap the mouse position to a range between 0 and 1
  scaledVal = map(mouseX, 0,width, 0,1);
  // lerp the color between the from and too color using the
  // scaled value to navigate between them.
  inBetweenColor = lerpColor(fromColor,tooColor, scaledVal);

  fill(inBetweenColor);

  background(10, 20); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 10 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 10 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 20 * cos(2 * PI * t + angle);
      let myY = y + 40 * sin(2 * PI * t + angle);

      speed = map(mouseX, 0, width, 0, 100);


      ellipse(myX, myY, 15); // draw particle
    }
  }



  t = t + 0.005; // update time
}
