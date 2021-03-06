
setInterval(function()
{
    var rain = document.createElement("div");

    rain.style.position = "fixed";
    rain.style.height = "150px";
    rain.style.width = "2px";
    rain.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 1))";
    rain.style.filter = "blur(" + Math.random() * 5 + "px)";
    rain.style.top = "0px";
    rain.style.left = Math.random() * 1920 + "px";
    rain.style.opacity = parseInt(Math.random() * 10) / 10 + "";

    document.body.appendChild(rain);

    var timer = setInterval(function()
    {
        var height = parseInt(rain.style.top);
        var k = 1;
        k++;

        rain.style.top = height + 5 * Math.pow(k, 2) + "px";

        if(rain.style.top >= "900px")
        {
            clearInterval(timer);
            rain.parentNode.removeChild(rain);
        }
    }, 8)
}, 8)