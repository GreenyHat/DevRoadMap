/**PROBLEMAS CON ESTE EJERCICIO:
 * 
 * 
 * 1- Hay que añadir los distintos elementos y referenciarlos en el DOM para imteractuar con ellos 
 * 2- Debo hacer que en un espacio determinado (en este caso 500x500 px) se generen de manera aleatoria los distintos characters
 * 3- Debo hacer que se carguen de manera simultánea, para que no se superpongan objetos entre sí
 * 4- Para solicionar el problema 3 lo que se debería hacer es almacenar en las variables de los characters diferentes atributos para podr hacer que primero siempre carge el tile, con un booleano. Para eso haremos un "JSON" de cada character donde se almacene la ruta de cada objeto y el booleano para asegurar que carga siempre despues de tile 
 * 
 * 
 */

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var x;

var background = {url:"tile.png", loadOk:false};

var pig = {url:"cerdo.png", loadOk:false};
var cow = "vaca.png";
var chiken = "pollo.png";

background.image = new Image();
pig.image = new Image();

var char2 = new Image();
var char3 = new Image();

background.image.src = background.url;
pig.image.src = pig.url;

pig.image.addEventListener("load", LoadPig)
background.image.addEventListener("load", LoadTile);

char2.src = cow;
char3.src = chiken;


function LoadTile()
{
    background.loadOk = true;
    Draw();
}
function LoadPig()
{
    pig.loadOk = true;
    Draw();
}
function Draw()
{
    if (background.loadOk) 
    {
        ctx.drawImage(background.image,0,0);

    }
     if (pig.loadOk && background.loadOk) 
    {
        for (let p = 0; p < 7; p++) 
        {
         ctx.drawImage(pig.image, RandomNum(0, 420/** 500px- 80 px */), RandomNum(0, 420)); 

        }
          
    }
}


 
for (let i = 0; i < 10 ; i++) 
{
    x = RandomNum(10,20);

}

function RandomNum(min, max)
{
    var r;
    r = Math.floor((Math.random() * (max-min) + 1) + min);
    return r;
}
