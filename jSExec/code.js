var canvas = document.getElementById("Canvas");
var lCount = 0;
var lines = 30;
var ctx = Canvas.getContext("2d");


function draw( color,x0,y0,x1,y1) //x0 and y0 --> initial x and y \\ //x1 and y1 --> final x and y \\ (Canvas)
{
    ctx.beginPath();
    ctx.strokeStyjle = color;//no es una funcion!! Ese fue el error. CUIDADO CON ESAS MIERDAS CABRONAZO!
    ctx.moveTo(10,1);
    ctx.lineTo(20,300);
    ctx.stroke();
    ctx.closePath();
}
while (lCount < lines) 
{
    draw("black", 0, 0, 10, 300);
    lCount++;
    console.log(lCount);

}
/* SACANDO UNA ECUACION BÁSICA PARA RESOLVER EL DIBUJO DE UNA MALLA:
 */

console.log(draw);

   


