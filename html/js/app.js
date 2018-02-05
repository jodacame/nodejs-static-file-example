var app = {};
app.play = function()
{
    number = Math.floor((Math.random() * 2) + 1);
    var audio = new Audio("/mp3/"+number+".mp3");
    audio.play();
}