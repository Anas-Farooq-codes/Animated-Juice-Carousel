// H1 TEXTS 
let h1Texts = ["Apple", "Pear", "Exotic"];

// Logo Colors 
let logoColors = [
    "var(--apple-logo)",
    "var(--pear-logo)",
    "var(--exotic-logo)",
];

// Keyframes 
let keyframes = ["wave-apple-effect", "wave-pear-effect", "wave-exotic-effect"];

// GSAP Animation 
gsap.from(".fruit-image", { y: "-100vh", delay: 0.5 });
gsap.to(".fruit-image img", {
    x: "random(-20, 20)",
    y: "random(-20, 20)",
    zIndex: 22,
    ease: "none",
    duration: 0.7,
    yoyo: true,
    repeat: -1
});





// Get the elements 
const waveEffect = document.querySelector(".wave");
const canLabels = document.querySelector(".canLabels");
const sectionContainer = document.querySelector(".section-container");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const sections = document.querySelectorAll(".section");

// Index and current positions 
let index = 0;
let currentIndex = 0;
let currentPosition = 0;

function disableButtons() {
    nextButton.disabled = true;
    prevButton.disabled = true;
    setTimeout(() => {
        nextButton.disabled = false;
        prevButton.disabled = false;
    }, 1000);
}

nextButton.addEventListener("click", () => {

    // Call the disableButtons function to prevent fast consecutive clicks

    disableButtons();

    // Decrease the currentPosition by 100% to the left 

    if (currentPosition > -200) {
        currentPosition -= 100;
        canLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
    }

    // Increment index and currentIndex 

    currentIndex++;

    // Update the h1 text if currentIndex is less than the length of h1Texts 

    if (currentIndex < h1Texts.length) {
        document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
    }


    // Animation For next section 

    gsap.to(".logo", {
        opacity: 1,
        duration: 1,
        color: logoColors[currentIndex]
    });
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
    gsap.from(".fruit-image", { y: "-100vh", delay: 0.4, duration: 0.4 });

    // Hide nextButton if the last section is active 

    if (currentIndex === h1Texts.length - 1) {
        nextButton.style.display = "none";
    }

    // Show prevButton if it's not the first section 

    if (currentIndex > 0) {
        prevButton.style.display = "block";
    }

    nextButton.style.color = logoColors[currentIndex + 1] || logoColors[currentIndex];
    prevButton.style.color = logoColors[currentIndex - 1] || logoColors[currentIndex];
    nextButton.style.animationName = keyframes[currentIndex + 1] || keyframes[currentIndex];
    prevButton.style.animationName = keyframes[currentIndex - 1] || keyframes[currentIndex];
});

prevButton.addEventListener("click", () => {

    // Call the disableButtons function to prevent fast consecutive clicks

    disableButtons();

    // Move currentPosition to the right by 100% if it's less than 0 


    
    if (currentPosition < 0) {
        currentPosition += 100;
        canLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
        sectionContainer.style.transition = `all 0.5s ease-in-out`;
    }



    // Decrement index and currentIndex 

    currentIndex--;

    if (currentIndex >= 0) {
        document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
    }

    

    // GSAP animation for previous section 

    gsap.to(".logo", { color: logoColors[currentIndex], duration: 1 });
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
    gsap.from(".fruit-image", { y: "100vh", delay: 0.5 });

    // Show the next button if it was hidden 

    nextButton.style.display = "block";

    // Hide the prevButton if it's the first section 

    if (currentIndex === 0) {
        prevButton.style.display = "none";
    }

    nextButton.style.color = logoColors[currentIndex + 1] || logoColors[currentIndex];
    prevButton.style.color = logoColors[currentIndex - 1] || logoColors[currentIndex];
    nextButton.style.animationName = keyframes[currentIndex + 1] || keyframes[currentIndex];
    prevButton.style.animationName = keyframes[currentIndex - 1] || keyframes[currentIndex];
});
