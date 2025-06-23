const menuIcon = document.querySelector("#menuIcon");
const menuContainer = document.querySelector("#menuContainer");
const replayBtn = document.querySelector("#replayButton"); // Get Replay button
const rateExperienceBtn = document.querySelector('#rateExperienceBtn');
const toggleMenu = () => {
    menuIcon.classList.toggle("open");
    menuContainer.classList.toggle("show");
  rateExperienceBtn.style.display = "none";
    // ✅ Hide the Replay button when menu is opened
    replayBtn.style.display = "none";
};

menuIcon.addEventListener("click", toggleMenu);
