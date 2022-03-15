var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var x;

var image = new Image();

for (let i = 0; i < 10 ; i++) 
{
    x = RandomNum(10,20);
    document.write(x + ", ");

}

function RandomNum(min, max)
{
    var r;
    r = Math.floor((Math.random() * (max-min) + 1) + min);
    return r;
}