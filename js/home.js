const landingSection = document.querySelector('#landing-section')
const selectionSection = document.querySelector('#selection-section')
const backBtn = document.querySelector('#backBtn')

function startExperience() {
    landingSection.classList.add('hide')
    selectionSection.classList.add('show')
    backBtn.classList.add('show')
}
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("introAudio");

    // Ensure audio plays on some browsers requiring user interaction
    audio.play().catch(() => {
        console.log("Auto-play blocked. User interaction may be required.");
    });

    // When the audio finishes, hide the intro screen and show main content
    audio.addEventListener("ended", function () {
        document.getElementById("introScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    });
});

function goToExperience(experienceID) {
    switch (experienceID) {
        case 1:
            document.location.href = './young-lady.html'
            break;
        case 2:
            document.location.href = './man.html'
            console.log(experienceID, 'man');
            break;
        case 3:
            document.location.href = './old-lady.html'
            console.log(experienceID, 'old lady');
            break;

        default:
            break;
    }
}

function goBack() {
    landingSection.classList.remove('hide')
    selectionSection.classList.remove('show')
    backBtn.classList.remove('show')
}

window.startExperience = startExperience
window.goToExperience = goToExperience
window.goBack = goBack