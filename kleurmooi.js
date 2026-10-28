const fotos = document.querySelectorAll(".plaatjes img");
const GOAT = document.querySelector('#GOAT');
const nah = document.querySelector('#nah');

fotos.forEach(function(foto) {
    foto.addEventListener("mouseenter", function() {
        foto.style.transform = "scale(1.3)";
    });

    foto.addEventListener("mouseleave", function() {
        foto.style.transform = "scale(1)";
    });
});

let navlinks = document.querySelectorAll(".nav-links");
navlinks.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        item.style.color = "blue";
    });

item.addEventListener("mouseleave", function() {
item.style.color = "white";
    });
});



GOAT.addEventListener('click', function() {
    const macBAAs = true;
    if (macBAAs) {
        window.location.href = "about.html";
    } else {
        window.location.href = "https://open.spotify.com/track/2lpygKqzPFtItQ4ss3cgfb?si=7168d55fbdaf41c9";
    }
})

nah.addEventListener('click', function() {
    const macBAAs = false;
    if (macBAAs) {
        window.location.href = "about.html";
    } else {
        window.location.href = "https://open.spotify.com/track/2lpygKqzPFtItQ4ss3cgfb?si=7168d55fbdaf41c9";
    }
})