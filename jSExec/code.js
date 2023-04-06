var button = document.getElementById("Button")
var text_line = document.getElementById("Text_line")
button.addEventListener("click", DrawWhenClick);//Esto es para que el objeto reaccione a un evento


var canvas = document.getElementById("Canvas");
var lCount = 0;
var lines = 30;//LO QUE RECORRE EN EL EJE Y
var ctx = canvas.getContext("2d");
var width = canvas.width;
var x1, y0; //y0 --> initial y \\ //x1 --> final x \\ (Canvas)
var lColor = "black"
// while (lCount < lines)  
// {
//     draw("black", 0, 0, 10, 300);
//     lCount++;
//     console.log(lCount);

// }

/* SACANDO UNA ECUACION BÁSICA PARA RESOLVER EL DIBUJO DE UNA MALLA:*/
// while (lCount < lines)
// {
    
//     y0 = 10 * lCount;
//     x1 = 10 * (lCount + 1);
//     Draw(lColor, 0, y0, x1, 300);
//     lCount++;   
//     console.log(lCount);

// }
// Draw(lColor, 1, 1, 1, 299);
// Draw(lColor, 1, 299, 299, 299);

function Draw( color,xInit,yInit,xFinal,yFinal) 
{
    ctx.beginPath();
    ctx.strokeStyle = color;//no es una funcion!! Ese fue el error. CUIDADO CON ESAS MIERDAS CABRONAZO!
    ctx.moveTo(xInit,yInit);
    ctx.lineTo(xFinal,yFinal);
    ctx.stroke();
    ctx.closePath();
}

function DrawWhenClick()
{
<<<<<<< HEAD
=======
    // testing simple: alert("Hola");
>>>>>>> 4b2c725 (initial-state)
    lines = parseInt(text_line.value); //--> transforma lines en el input de la caja del html y lo usa como condicion abajo para ejecutar el ciclo y que dibuje lineas
    lColor = "yellow";
    var space = width / lines

    while (lCount < lines)
    {
    
        y0 = space * lCount;
        x1 = space * (lCount + 1);
        Draw(lColor, 0, y0, x1, 300);
        lCount++;   
        console.log(lCount);
       

    }

    Draw(lColor, 1, 1, 1, 299);
    Draw(lColor, 1, 299, 299, 299);

    
}
DrawWhenClick();
/**Idea: que el programa reciba datos e interactue
 * Problema 1: El click al boton debe ser interactivo
 * Problema 2: el string de entrada se tiene que convertir en variable
 * y ademas ser un numero entero operable
 * Problema 3: Dibujar al darle click tras obtener el numero
 * Problema 4: Como hacer que el numero de lineas sea el de una variable
 */