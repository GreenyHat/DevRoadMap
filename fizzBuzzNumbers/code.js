/**
 * En esta práctica se requiere que se muestre una lista de numeros del 1 al 100 y que en aquellos que 
 * sean multiplos de 5 el numero correspondiente se sustituya por Fizz
 * y los que sean de 6 se les sustituya por Buzz.
 * Problemas:
 * 1- Listar todos los numeros de forma clara (en vertical con un <br />)
 * 2- Hacer el algoritmo de comprobación de los numeros mediante un módulo "%"
 * 3- Sustituir por las palabras señaladas los multiplos de 5 y 6 y los que sean por ambos por ambas palabras
 * 4- Hacerlo lo más legible posible
 */
var isMod;
for (var i = 1; i <=100; i++) 
{
    isMod=false;
    if (i%5==0) 
    {
        document.write("Fizz");
        isMod=true;      
    }  
  

    if (i%6 == 0) 
    {  
        document.write("Buzz");
        isMod=true;
    }

    if(!isMod)
    {
        document.write(i);
           
    }
    document.write("<br />")
   
}
