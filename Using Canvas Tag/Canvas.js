function dolime()
{
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor="pink";
}


function doyellow()
{
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor="blue";
  var ctx = dd1.getContext("2d");
  ctx.fillStyle="yellow";
  ctx.fillRect(10,10,40,40);
  ctx.fillRect(60,10,40,40);
  ctx.font="30px Arial";
  ctx.fillStyle="red";
  ctx.fillText("Hello",10,80);
}
