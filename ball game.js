  <style>
    #field {
      width: 200px;
      height: 150px;
      border: 10px groove black;
      background-color: #00FF00;
      position: relative;
      overflow: hidden;
    }

    #ball {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -35px;
      margin-top: -35px;
    }
  </style>
<body style="height:2000px">
  <div id="field" style="width: 200px; height: 150px; border: 10px groove black;">
    <img src="https://js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  </div>
<script>
//Сделайте так, что при клике по полю мяч перемещался на место клика.
var ball = document.getElementById('ball');
var field = document.getElementById('field');
var border = parseInt(field.style.border);
ball.onclick = function(event) {
    // вывести координаты клика
    //console.log(event.clientX + ":" + event.clientY);
    }
   
var fieldW = parseInt(field.style.width);
var border = parseInt(field.style.border);
var fieldH = +parseInt(field.style.height);
var zx = 2 * border;
//console.log(fieldW);

field.onclick = function(event) {
 //console.log(event.clientY);
 if ((event.clientX < (fieldW + zx) && event.clientX > border) &&(event.clientY < (fieldH + 2*border) && event.clientY > border)) {
 // console.log(event.clientX + ":" + event.clientY);
  var tmp = +parseInt(event.clientX);
  //console.log(tmp);
  var x = Math.min(tmp, 195);
  var tmpx2 = Math.max(+parseInt(event.clientX), 35);
  console.log(tmpx2);
  if (event.clientX >= fieldW/2) {ball.style.left = x;}
  else if (event.clientX < fieldW/2) {ball.style.left = tmpx2;}
  var tmpy1 = Math.min(+parseInt(event.clientY), 145);
    var tmpy2 = Math.max(+parseInt(event.clientY), 35);
    if (event.clientY >= fieldH/2) {ball.style.top = tmpy1;}
  else if (event.clientY < fieldH/2) {ball.style.top = tmpy2;}

 }
 
 
    
 }
    












</script>
