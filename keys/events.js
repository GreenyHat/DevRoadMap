var keys = {UP:38, DOWN:40, LEFT:37, RIGHT:39};

document.addEventListener("keydown", DrawWithKey)


function DrawWithKey(event)//la variable event se llena de datos [es interesante para SEO, por ejemplo para el evento click almacena posicion de raton
{
    //console.log(event.keyCode);//lo de keyCode lo hemos averiguado haciendo un consLog a event y presionando teclas para ver sus atributos
    // console.log("key down");
     console.log(keys);
    if (event.keyCode == keys.RIGHT) 
    {
        console.log("right");
    }
   
} 

/**up 38
     * down 40
     * left 37
     * right 39
     */