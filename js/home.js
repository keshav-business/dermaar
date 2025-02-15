const landingSection = document.querySelector('#landing-section')
const selectionSection = document.querySelector('#selection-section')
const backBtn = document.querySelector('#backBtn')

function startExperience() {
    landingSection.classList.add('hide')
    selectionSection.classList.add('show')
    backBtn.classList.add('show')
}
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("myAudio");
    let introOverlay = document.getElementById("introOverlay");
    let mainContent = document.getElementById("mainContent");

    // Ensure audio plays (Some browsers block autoplay)
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked, user interaction required.");
        });
    }

    // When the audio finishes, hide the intro and show main content
    audio.addEventListener("ended", function () {
        console.log("Audio ended, switching screens.");
        introOverlay.style.display = "none";  // Hide intro screen
        mainContent.style.display = "block";  // Show main screen
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