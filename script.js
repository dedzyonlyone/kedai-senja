// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".hero-text, .hero-card, .section-heading, .menu-card, .about-visual, .about-text, .location-box, .cta"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);

            }

        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.querySelector("footer");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML = yearElement.innerHTML.replace(
        "2026",
        currentYear
    );

}


// =========================
// MENU CARD CLICK EFFECT
// =========================

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((card) => {

    card.addEventListener("click", () => {

        menuCards.forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});