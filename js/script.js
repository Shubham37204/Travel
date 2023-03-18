window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});


let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let p8 = document.getElementById("p8");
let image = document.getElementById("images");

p3.onclick = function () {
    image.style.backgroundImage = "url(img/p3.jpg)";
}

p4.onclick = function () {
    image.style.backgroundImage = "url(img/p4.jpg)"
}

p5.onclick = function () {
    image.style.backgroundImage = "url(img/p5.jpg)"
}

p6.onclick = function () {
    image.style.backgroundImage = "url(img/p6.jpg)"
}

p7.onclick = function () {
    image.style.backgroundImage = "url(img/p7.jpg)"
}

p8.onclick = function () {
    image.style.backgroundImage = "url(img/p8.jpg)"
}