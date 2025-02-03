function moveNo() {
    let noButton = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

let noButton = document.getElementById("no");
noButton.addEventListener("mouseenter", moveNo); // Moves on hover (for desktop)
noButton.addEventListener("click", moveNo); // Moves on click (for mobile)