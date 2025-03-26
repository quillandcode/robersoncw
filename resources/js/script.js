document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".sticky-nav");
    const navOffset = nav.offsetTop; // Get initial nav position

    function handleScroll() {
        if (window.scrollY >= navOffset) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }
    
    // tilt.js activation
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        gyroscope: false
    });

    window.addEventListener("scroll", handleScroll);
});

/* Functions go here! */
function openLightbox(element) {
    var imgSrc = element.querySelector("img").src;
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* No SPAM allowed */
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let hpField = document.getElementById("phone_number");

    if (hpField.value.trim() !== "") {
        // Stop form submission
        event.preventDefault();
    }
});

function glitchEffect() {
    const hero = document.getElementById("hero");

    // Set a glitch image for a short time
    hero.style.backgroundImage = "url('resources/images/glitch.jpg')";

    // Revert back after a quick flash
    setTimeout(() => {
        hero.style.backgroundImage = "none";
    }, 100 + Math.random() * 200); // Glitch lasts 100-300ms

    // Schedule the next glitch at a random time
    setTimeout(glitchEffect, 2000 + Math.random() * 5000); // 2 to 7 seconds delay
}

// Start the glitch effect
setTimeout(glitchEffect, 3000); // Initial delay
