var keys = {UP:38, DOWN:40, LEFT:37, RIGHT:39}; //objeto de constantes[la mayuscula es una buena practica para las constantes] (JSON)


var x = 150;
var y = 150;

var canvasKey = document.getElementById("CanvasKey");
var ctx = canvasKey.getContext("2d"); 
document.addEventListener("keyup", DrawWithKey);//<-- de aqui recibe los datos el switch

//cuando oprimes una teclab(en ESTE caso) se dispara la funcion referenciada
Draw("red",x-1,y-1,x+1,y+1);//init point

function DrawWithKey(event)/*la variable event es un parametro de entrada que se llena de datos que recibe de addEventListener 
hacia la funcion que coloques en los parámetros junto con el activador de la funcion 
(en este caso "keyup", es decir, cuando levantas linea) [es interesante para SEO,
 por ejemplo para el evento click almacena posicion de raton*/
{
    var movement = 10;
    var colorLine = "grey";
    console.log(event) //
    
    switch (event.keyCode) 
    {
        
       
        case keys.UP:
            Draw(colorLine,x,y,x,y-movement)
            y = y - movement;
            
            break;
        case keys.DOWN:
            Draw(colorLine,x,y,x,y+movement)
            y = y + movement;
            break;
        case keys.LEFT:
            Draw(colorLine,x,y,x - movement,y)
            x = x - movement;
            break;
        case keys.RIGHT:
            Draw(colorLine,x,y,x + movement,y)
            x = x + movement;
            break;

        default:
            alert("Sólo puedes usar flechas");
            break;
            
    }
    // console.log(event.keyCode);//lo de keyCode lo hemos averiguado haciendo un consLog a event y presionando teclas para buscar en sus atributos
   //console.log(event); //Esto te permite ver los atributos del objeto para usarlos en los bloques de codigo como con keys.UP por ejemplo.
}    


function Draw( color,xInit,yInit,xFinal,yFinal) 
{
    ctx.beginPath();
    ctx.strokeStyle = color;//no es una funcion!! Ese fue el error. CUIDADO CON ESAS MIERDAS CABRONAZO!
    ctx.lineWidth = 3;//cuantos pixeles ocupa (tenemos 300 en el lienzo)
    ctx.moveTo(xInit,yInit);
    ctx.lineTo(xFinal,yFinal);
    ctx.stroke();
    ctx.closePath();
}



  /* *up 38
     * down 40
     * left 37
     * right 39
     */