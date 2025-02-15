const landingSection = document.querySelector('#landing-section')
const selectionSection = document.querySelector('#selection-section')
const backBtn = document.querySelector('#backBtn')

function startExperience() {
    landingSection.classList.add('hide')
    selectionSection.classList.add('show')
    backBtn.classList.add('show')
}
document.addEventListener("DOMContentLoaded", function () {
    let introOverlay = document.getElementById("introOverlay");
    let mainContent = document.getElementById("mainContent");
    let myAudio = document.getElementById("myAudio");

    console.log("✅ JavaScript Loaded!");

    if (!introOverlay || !mainContent || !myAudio) {
        console.error("❌ One or more elements not found! Check your HTML IDs.");
        return;
    }

    // Hide intro screen and show main content after 10 seconds
    setTimeout(function () {
        console.log("✅ 10 seconds passed, switching screens.");
        introOverlay.style.display = "none";  // Hide intro screen
        mainContent.style.display = "block";  // Show main screen
    }, 10000);
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