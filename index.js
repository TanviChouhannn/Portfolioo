const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    const icon = themeToggle.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Thank you, ${name}! Your message has been received.`);

    contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .stat-card, .experience-card, .timeline-item"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
});
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            if (nav) {
                nav.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.classList.remove("active");
            }
        });
    });


    const themeBtn = document.querySelector(".theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    const sections = document.querySelectorAll("section");

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(section => {
        section.classList.add("reveal");
        revealObserver.observe(section);
    });


    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
        card.classList.add("reveal");

        revealObserver.observe(card);
    });


    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            alert("Thank you for your message! I'll get back to you soon.");

            contactForm.reset();
        });
    }


    const currentYear = document.querySelector("#year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
