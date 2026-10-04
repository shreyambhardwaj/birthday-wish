```javascript
const surpriseButton = document.getElementById("surpriseButton");
const surpriseSection = document.getElementById("surpriseSection");
const heartsContainer = document.getElementById("hearts");
const confettiContainer = document.getElementById("confetti");

let musicStarted = false;


/* =========================================
   SURPRISE BUTTON
========================================= */

surpriseButton.addEventListener("click", function () {

    // Show surprise
    surpriseSection.classList.add("show");

    // Birthday music
    playBirthdayMusic();

    // Confetti
    createConfetti();

    // Hearts
    createHearts(35);

    // Scroll to surprise
    setTimeout(function () {

        surpriseSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

});


/* =========================================
   BIRTHDAY MELODY
========================================= */

function playBirthdayMusic() {

    if (musicStarted) {
        return;
    }

    musicStarted = true;

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    const audioContext = new AudioContext();

    /*
       Birthday-style melody
    */

    const notes = [
        261.63,
        261.63,
        293.66,
        261.63,
        349.23,
        329.63,

        261.63,
        261.63,
        293.66,
        261.63,
        392.00,
        349.23,

        261.63,
        261.63,
        523.25,
        440.00,
        349.23,
        329.63,
        293.66,

        466.16,
        466.16,
        440.00,
        349.23,
        392.00,
        349.23
    ];

    let time = audioContext.currentTime;

    notes.forEach(function (frequency, index) {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value =
            frequency;

        gain.gain.setValueAtTime(
            0.0001,
            time
        );

        gain.gain.exponentialRampToValueAtTime(
            0.15,
            time + 0.03
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            time + 0.45
        );

        oscillator.connect(gain);

        gain.connect(audioContext.destination);

        oscillator.start(time);

        oscillator.stop(time + 0.5);

        time += 0.48;

    });

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "⭐",
        "💕",
        "🌸",
        "🎂"
    ];

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.fontSize =
            12 +
            Math.random() * 20 +
            "px";

        confettiContainer.appendChild(piece);

        setTimeout(function () {

            piece.remove();

        }, 5500);

    }

}


/* =========================================
   HEARTS
========================================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "💖";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            14 +
            Math.random() * 22 +
            "px";

        heart.style.animationDuration =
            4 +
            Math.random() * 4 +
            "s";

        heart.style.animationDelay =
            Math.random() * 2 +
            "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 9000);

    }

}


/* =========================================
   CONTINUOUS HEARTS
========================================= */

setInterval(function () {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "❤️"
            : "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        10 +
        Math.random() * 18 +
        "px";

    heart.style.animationDuration =
        5 +
        Math.random() * 4 +
        "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 9000);

}, 1500);
```
