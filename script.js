
// EFEK MENGETIK OTOMATIS
const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Pelajar",
    "Programmer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    const currentWord = words[wordIndex];

    typingElement.textContent = currentWord.substring(
        0,
        charIndex
    );

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typingEffect, deleting ? 60 : 100);
}

typingEffect();


// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});


// ANIMASI SKILL BAR
const skillBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;

            bar.style.width = bar.dataset.width;

            observer.unobserve(bar);
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    observer.observe(bar);
});


// ANIMASI SECTION
const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    sectionObserver.observe(section);
});
