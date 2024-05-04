document.addEventListener("DOMContentLoaded", function () {
  const welcomeScreen = document.getElementById("welcomeScreen");
  const text =
    "Hello, Crawler.\n\nAs you’re about to find, this is a very special book.\n\nIf you’re reading these words, it means this book has found its way into your hands for one purpose and one purpose only.\n\nTogether, we will burn it all to the ground.\n\n";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      welcomeScreen.innerHTML +=
        text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
      i++;
      setTimeout(typeWriter, 10); // Adjusted for readability during typing
    } else {
      welcomeScreen.innerHTML +=
        '<br><button id="joinButton">Join</button> <button id="declineButton">Decline</button>';
      attachButtonListeners();
    }
  }

  function attachButtonListeners() {
    document.getElementById("joinButton").addEventListener("click", handleJoin);
    document
      .getElementById("declineButton")
      .addEventListener("click", fadeToBlack);
  }

  typeWriter();
});

function handleJoin() {
  fadeOutText();
  openNav();
}

function fadeOutText() {
  const welcomeScreen = document.getElementById("welcomeScreen");
  welcomeScreen.style.transition = "opacity 2s ease-in-out";
  welcomeScreen.style.opacity = 0;
  setTimeout(() => {
    welcomeScreen.style.display = "none";
    fadeInHiddenText();
  }, 2000); // Wait for the fade out to complete
}

function fadeInHiddenText() {
  const hiddenText = document.getElementById("hiddenText");
  hiddenText.style.display = "block"; // Ensures it's not 'none'
  requestAnimationFrame(() => {
    hiddenText.style.opacity = 1; // Ensures it fades in
  });
}

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.body.classList.add("sidebar-open"); // Add class when sidebar opens
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.body.classList.remove("sidebar-open"); // Remove class when sidebar closes
}

function handleJoin() {
  fadeOutText();
  openNav();
}

function fadeToBlack() {
  document.body.style.transition = "background-color 0.5s, opacity 0.5s";
  document.body.style.backgroundColor = "black";
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.innerHTML = "";
  }, 500);
}
