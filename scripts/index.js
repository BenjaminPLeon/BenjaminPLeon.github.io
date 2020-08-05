var opacity = 0;
var intervalID = 0;

function fadeIn() {
    img.style.opacity = opacity;
    intervalID = setInterval(hide, 20);
}

function hide() {
    var img = document.getElementById("benImg");
    opacity = Number(indow.getComputedStyle(img).getPropertyValue("opacity"));

    if (opacity > 0) {
        opacity = opacity + 0.1;
        img.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}