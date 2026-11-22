
// PAGE SCROLL PROGRESS

window.addEventListener("scroll", () => {
  const total =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = total > 0
    ? (window.scrollY / total) * 100
    : 0;

  document.getElementById("progress").style.width =
    progress + "%";
});

// SCROLL REVEAL ANIMATIONS

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// HAPPY MESSAGE GENERATOR

const wishes = [
  "May your days be as beautiful as your dreams. 🩵",
  "Never forget how special your smile is. 🌷",
  "You deserve a sky full of beautiful things. ✨",
  "Keep blooming at your own pace. 🌸",
  "May happiness find you in unexpected places. 🦋",
  "Your story deserves countless beautiful chapters. 📖",
  "Keep being wonderfully yourself. 💗",
  "May your heart always find reasons to smile. ☁️"
];

let previousWish = -1;

function newWish() {
  let index;

  do {
    index = Math.floor(Math.random() * wishes.length);
  } while (index === previousWish);

  previousWish = index;

  document.getElementById("wishText").textContent =
    wishes[index];
}

// BIRTHDAY CANDLES

let candlesBlown = false;

function blowCandles() {
  const flames = document.getElementById("flames");
  const message = document.getElementById("cakeMessage");

  candlesBlown = !candlesBlown;

  flames.textContent = candlesBlown
    ? "♡   ♡   ♡"
    : "🕯️ 🕯️ 🕯️";

  message.textContent = candlesBlown
    ? "May all your little wishes find their way to you. ✨"
    : "Three little candles, three little wishes.";
}

// SECRET LETTER

function openLetter() {
  document.getElementById("closedLetter").hidden = true;
  document.getElementById("letterText").style.display = "block";
}

// PHOTO GALLERY

const photoInput = document.getElementById("photoInput");

photoInput.addEventListener("change", event => {
  Array.from(event.target.files).forEach(file => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = e => {
      const card = document.createElement("div");
      card.className = "photo";

      const image = document.createElement("img");
      image.src = e.target.result;
      image.alt = "Birthday memory";

      card.appendChild(image);
      document.getElementById("gallery").appendChild(card);
    };

    reader.readAsDataURL(file);
  });

  photoInput.value = "";
});

// INTERACTIVE STARS

const starMessages = [
  "May your dreams always have wings. 🦋",
  "You deserve endless little moments of happiness. 🩵",
  "May your kindness return to you a hundred times. 🌷",
  "The best chapters are still waiting for you. 📖",
  "Keep shining in your own beautiful way. ✨",
  "May tomorrow bring you something lovely. 💗"
];

const starSky = document.getElementById("starSky");

starMessages.forEach((message, index) => {
  const star = document.createElement("button");

  star.className = "star";
  star.textContent = "✦";
  star.setAttribute("aria-label", "Reveal a birthday wish");

  star.style.left = (10 + (index * 13) % 80) + "%";
  star.style.top = (15 + (index * 29) % 70) + "%";

  star.addEventListener("click", () => {
    document.getElementById("starMessage").textContent =
      message;
  });

  starSky.appendChild(star);
});
