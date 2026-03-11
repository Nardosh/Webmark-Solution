// AOS animation start
AOS.init({
    duration: 1000,
    once: true,
    offset: 120
});

// Navbar toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});




const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const speed = 200;
        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 10);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});




const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(() => {
    testimonials[index].classList.remove("active");

    index++;

    if (index >= testimonials.length) {
        index = 0;
    }

    testimonials[index].classList.add("active");

}, 4000);



// HERO PARALLAX

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelectorAll(".hero-shape").forEach(shape => {

        shape.style.transform =
            `translate(${x * 40}px,${y * 40}px)`;

    });

});



// SCROLL PROGRESS

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.querySelector(".scroll-bar").style.width =
        progress + "%";

});



// CURSOR GLOW FOLLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});




// HERO 3D TILT

const card = document.querySelector(".tilt-card");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform = "rotateX(0) rotateY(0)";

});


const heroImg = document.querySelector(".hero-right img");

heroImg.addEventListener("mousemove", (e) => {

    const rect = heroImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    heroImg.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

heroImg.addEventListener("mouseleave", () => {
    heroImg.style.transform = "rotateX(0) rotateY(0)";
});