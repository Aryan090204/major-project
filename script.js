document.addEventListener("DOMContentLoaded", function () {
    const words = ["SERVICES", "STRATEGY", "GROWTH", "MARKETING"];
    let index = 0;
    const rotatingText = document.getElementById("js-rotating");

    setInterval(() => {
        rotatingText.textContent = words[index];
        index = (index + 1) % words.length;
    }, 3000);
});
document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        this.classList.toggle("active");
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            document.querySelectorAll(".accordion-content").forEach((item) => {
                item.style.maxHeight = null;
            });
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
function openTab(event, tabId) {
    let tabs = document.querySelectorAll('.tab-pane');
    let navItems = document.querySelectorAll('.nav-tabs li');

    tabs.forEach(tab => tab.classList.remove('active'));
    navItems.forEach(item => item.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}


function moveSlide(direction) {
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    index = (index + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! We will contact you soon.");
});

// Slider Logic
let index = 0;
function moveSlide(direction) {
    const slides = document.getElementById("slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    index = (index + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

// Auto-slide every 5 seconds (optional)
setInterval(() => moveSlide(1), 5000);
function filterSelection(category) {
    let items = document.querySelectorAll(".grid-item");
    let buttons = document.querySelectorAll(".filter-buttons button");

    // Remove "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add "active" class to clicked button
    event.target.classList.add("active");

    if (category === "all") {
        items.forEach(item => item.classList.remove("hidden"));
    } else {
        items.forEach(item => {
            item.classList.contains(category) ? item.classList.remove("hidden") : item.classList.add("hidden");
        });
    }
}