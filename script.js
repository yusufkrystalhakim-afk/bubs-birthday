// ====== CONFIGURATION ======
const messages = [
`Hey you,

Just wanted to say... Happy Birthday! 🎂
I hope your day is filled with laughter, warmth, and little moments that make you smile.

You deserve all the good things today and always. 💛`,

`Hey you,
I'm so sorry if I had no time for you.
I just wanted to know you bla bla bla.`
];

let currentIndex = 0;
let typingInterval;

// ====== ELEMENTS ======
const openButton = document.getElementById("openButton");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const gif = document.getElementById("centerGif");
const messageEl = document.getElementById("message");
const nav = document.getElementById("navButtons");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const bgMusic = document.getElementById("bgMusic");

// ====== START FUNCTION ======
openButton.addEventListener("click", () => {
  intro.style.opacity = 0;
  setTimeout(() => {
    intro.classList.add("hidden");
    content.classList.add("show");
    gif.classList.add("show");
    bgMusic.play().catch(()=>{});
    startTyping(messages[currentIndex]);
  }, 800);

  generateSnow();
});

// ====== TYPEWRITER EFFECT ======
function startTyping(text) {
  messageEl.textContent = "";
  messageEl.classList.remove("show");
  clearInterval(typingInterval);
  let i = 0;
  messageEl.classList.add("show");

  typingInterval = setInterval(() => {
    if (i < text.length) {
      messageEl.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        if (currentIndex === messages.length - 1) nav.classList.remove("hidden");
      }, 500);
    }
  }, 40);
}

// ====== NAVIGATION ======
nextBtn.addEventListener("click", () => {
  if (currentIndex < messages.length - 1) {
    currentIndex++;
    fadeTransition();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    fadeTransition();
  }
});

function fadeTransition() {
  messageEl.classList.remove("show");
  setTimeout(() => startTyping(messages[currentIndex]), 500);
}

// ====== SNOW EFFECT ======
function generateSnow() {
  const numFlakes = 35;
  for (let i = 0; i < numFlakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    const size = Math.random() * 5 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
    document.body.appendChild(snowflake);
  }
}
