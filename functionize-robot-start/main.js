// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Arguments

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rect(30, 260, 540, 120);
// Filled Triangle for Hair
triangle(180, 80, 140, 100, 220, 100, "fill");
triangle(340, 80, 300, 100, 380, 100, "fill");
// Outlined Triangle for Hair
triangle(260, 80, 220, 100, 300, 100, "stroke");
triangle(420, 80, 380, 100, 460, 100, "stroke");
// Filled Triangle for Neck
triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, "fill");
// Filled Circle for Right Eye Socket
circle(400, 250, 50, "fill");
// Rectangle for Mouth
rect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380);
// First Vertical Line for Teeth
line(250, 350, 250, 410);
// Second Vertical Line for Teeth
line(300, 350, 300, 410);
// Third Vertical Line for Teeth
line(350, 350, 350, 410);

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";

circle(200, 250, 30, "fill");
// Filled Circle for Right Eye
circle(400, 250, 10, "fill");

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");
// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(66, 66, 66)";
line(150, 180, 250, 180);
// Line for Right Eyebrow
line(350, 160, 450, 180);
// Outlined Triangle for Nose
triangle(300, 280, 320, 320, 280, 320);

// Left star
ctx.fillStyle = "rgb(153, 24, 24)";
star(
  65,
  280,
  75,
  310,
  95,
  315,
  80,
  330,
  85,
  357,
  65,
  340,
  45,
  357,
  50,
  330,
  35,
  315,
  55,
  310,
  65,
  280,
  "fill"
);

// Right star
ctx.fillStyle = "rgb(24, 58, 153)";
star(
  535,
  280,
  545,
  310,
  565,
  315,
  550,
  330,
  555,
  357,
  535,
  340,
  515,
  357,
  520,
  330,
  505,
  315,
  525,
  310,
  535,
  280,
  "fill"
);

// Tie
ctx.fillStyle = "rgb(95, 24, 153)";
triangle(270, 515, 330, 515, 300, 550, "fill");
triangle(260, 600, 300, 515, 340, 600, "fill");

// Hat
ctx.fillStyle = "black";
rect(220, 85, 160, 15);
rect(238, 30, 124, 60);
ctx.fillStyle = "rgb(95, 24, 153)";
rect(235, 70, 130, 15);

// Glasses
ctx.strokeStyle = "rgb(36, 36, 36)";
ctx.lineWidth = 5;
circle(190, 260, 80, "stroke");
circle(410, 260, 80, "stroke");
line(110, 270, 95, 255);
line(490, 270, 505, 255);
line(270, 270, 330, 270);

// Facial hair
ctx.fillStyle = "rgb(66, 66, 66)";
triangle(270, 420, 330, 420, 300, 440, "fill");

// Text
ctx.strokeStyle = "rgb(100, 100, 100)";
ctx.lineWidth = 2;
rotate(5);
text("bold italic 30px Arial", "I AM A ROBOT", 155, 455, "stroke");

// Functions

function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (type == "fill") {
    ctx.fill();
  } else {
    ctx.closePath();
    ctx.stroke();
  }
}

function rect(x, y, w, h) {
  ctx.fillRect(x, y, w, h);
}

function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type == "fill") {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function star(
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  x4,
  y4,
  x5,
  y5,
  x6,
  y6,
  x7,
  y7,
  x8,
  y8,
  x9,
  y9,
  x10,
  y10,
  x11,
  y11,
  type
) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x5, y5);
  ctx.lineTo(x6, y6);
  ctx.lineTo(x7, y7);
  ctx.lineTo(x8, y8);
  ctx.lineTo(x9, y9);
  ctx.lineTo(x10, y10);
  ctx.lineTo(x11, y11);
  if (type == "fill") {
    ctx.fill();
  } else {
    ctx.closePath();
    ctx.stroke();
  }
}

function text(font, text, x, y, type) {
  ctx.font = font;
  if (type == "fill") {
    ctx.fillText(text, x, y);
  } else {
    ctx.strokeText(text, x, y);
  }
}

function rotate(degrees) {
  ctx.rotate((Math.PI / 180) * degrees);
}
