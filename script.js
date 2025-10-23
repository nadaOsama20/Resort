const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const fadeImgs = document.querySelectorAll(".service__card img, .property__card img");

// Fade-in للصور عند الظهور
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });

fadeImgs.forEach(img => observer.observe(img));

// الهامبرغر
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtnIcon.setAttribute(
        "class",
        navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ScrollReveal
const scrollRevealOption = { distance: "50px", origin: "bottom", duration: 1000 };

ScrollReveal().reveal(".header__content h1", {...scrollRevealOption });
ScrollReveal().reveal("header form", {...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".service__card", {...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".experience__content .section__header", {...scrollRevealOption });
ScrollReveal().reveal(".experience__content p", {...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".experience__btn", {...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".experience__stats", {...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".subscribe .section__header", {...scrollRevealOption });
ScrollReveal().reveal(".subscribe form", {...scrollRevealOption, delay: 500 });

// Counters
const counters = document.querySelectorAll(".experience__stats h4");

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;

        const updateCount = () => {
            const increment = Math.ceil(target / 200); // سرعة الزيادة
            count += increment;
            if (count < target) {
                counter.innerText = count + "+";
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
}

let statsSection = document.querySelector(".experience__stats");
let statsAnimated = false;

window.addEventListener("scroll", () => {
    if (!statsAnimated && statsSection.getBoundingClientRect().top < window.innerHeight * 0.9) {
        animateCounters();
        statsAnimated = true;
    }
});


// Swiper متجاوب
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        540: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
    },
});

// زر العودة للأعلى
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) toTop.classList.add("show");
    else toTop.classList.remove("show");
});
toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});