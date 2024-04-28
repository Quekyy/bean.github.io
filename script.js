const pusheenGif = document.getElementById("pusheenGif");
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");

let state = "normal";

yesBtn.addEventListener("click", function() {
    state = "completed";
    // Change the gif image to another one
    pusheenGif.src = "./Images/complete.gif";
    // Change the header message
    document.querySelector("h1").innerText = "YESSSS";
    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("click", function() {
    if (state === "normal") {
        state = "triggered";
        // Change the header message to "wrong answer"
        document.querySelector("h1").innerText = "wrong answer";

        // Change the gif image to another one
        pusheenGif.src = "./Images/trigger.gif";
    } else if (state === "completed") {
        state = "normal";
        // Change the gif image back to the original one
        pusheenGif.src = "/Images/giphy.gif";
    }
});

noBtn.addEventListener("mouseover", function() {
    if (state === "triggered") {
        // Calculate random position within the visible area
        const padding = 50; // Padding to keep the button within the visible area
        const movementPercentage = 0.3; // Adjust this value to control movement range (0 to 1)
        const maxX = window.innerWidth - noBtn.offsetWidth * (1 - movementPercentage) - padding * 4;
        const maxY = window.innerHeight - noBtn.offsetHeight * (1 - movementPercentage) - padding * 4;
        
        // Calculate random position with minimum check
        const newX = Math.max(padding, Math.min(maxX, Math.random() * maxX * 0.5)); // Multiply by 0.5 for a smaller range
        const newY = Math.max(padding, Math.min(maxY, Math.random() * maxY * 0.5));
        
        // Apply the random position using transform with smooth transition
        noBtn.style.transition = "transform 0.5s ease";
        noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
    }
});
