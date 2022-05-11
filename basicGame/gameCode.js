/**PROBLEMAS CON ESTE EJERCICIO:
 * 
 * 
 * 1- Hay que añadir los distintos elementos y referenciarlos en el DOM para imteractuar con ellos 
 * 2- Debo hacer que en un espacio determinado (en este caso 500x500 px) se generen de 
 *    manera aleatoria los distintos characters
 * 3- Debo hacer que se carguen de manera simultánea, para que no se superpongan objetos entre sí
 * 4- Para solicionar el problema 3 lo que se debería hacer es 
 *  almacenar en las variables de los characters diferentes atributos para poder
 *  hacer que primero siempre carge el tile,
 *  con un booleano. Para eso haremos un "JSON" de cada character 
 * donde se almacene la ruta de cada objeto y el booleano para asegurar 
 * que carga siempre despues de tile 
 * 
 * DESAFÍO: HAZ QUE UN POLLO SE MUEVA CON LAS FLECHAS DEL TECLADO 
 */

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var x;

var background = {url:"tile.png", loadOk:false};
var pig = {url:"cerdo.png", loadOk:false};
var cow = {url:"vaca.png", loadOk: false};
var chiken = {url: "pollo.png", loadOk:false};

background.image = new Image();
pig.image = new Image();
cow.image = new Image();
chiken.image = new Image();

background.image.src = background.url;
pig.image.src = pig.url;
cow.image.src = cow.url;
chiken.image.src = chiken.url;

background.image.addEventListener("load", LoadTile);
pig.image.addEventListener("load", LoadPig);
cow.image.addEventListener("load", LoadCow);


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

function LoadCow()
{
    cow.loadOk = true;
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
      
       
        for (var p = 0; p < 4; p++) 
       {  
            var X = RandomNum(0, 420/** 500px- 80 px(tile-character) */);
            var Y = RandomNum(0, 420);
            ctx.drawImage(pig.image, X, Y ); 
        }
          
    }

    
    if (cow.loadOk && background.loadOk) 
    {
       for (let c = 0; c < 2; c++) 
       {
            var X = RandomNum(0, 420);
            var Y = RandomNum(0, 420);
            ctx.drawImage(cow.image, X, Y);  
        }  
    }
}


function RandomNum(min, max)
{
    var r;
    r = Math.floor((Math.random() * (max-min) + 1) + min);
    return r;
}
