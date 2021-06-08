var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
var isPainting = false;

function setWidth (value) {
  var canvas = document.getElementById("canvas1");
  canvas.width = value;
}

function setHeight(value){
  var canvas = document.getElementById("canvas1");
  canvas.height = value;
}

function startPaint(x,y){
  isPainting = true;
  doPaint(x,y);
}

function endPaint(){
  isPainting = false;
}

function doPaint(x,y){
  if (isPainting == true)
    {
      paintCircle(x,y);
    }
}

function changeColor(newColor){
  document.getElementById("brush").value = newColor;
}

function resizeBrush(newSize){
  radius = newSize;
  var x = document.getElementById("otp");
  x.value = newSize;
}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y,color) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = document.getElementById("brush").value;
    context.fill();
}
