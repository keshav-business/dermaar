// Ensure DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector("#menuIcon");
    const menuContainer = document.querySelector("#menuContainer");
    const replayBtn = document.querySelector("#replayButton");

    // Check if elements exist
    if (!menuIcon) {
        console.error('Element with ID "menuIcon" not found in the DOM.');
        return;
    }
    if (!menuContainer) {
        console.error('Element with ID "menuContainer" not found in the DOM.');
        return;
    }
    if (!replayBtn) {
        console.warn('Element with ID "replayButton" not found in the DOM.');
    }

    const toggleMenu = () => {
        console.log('Menu icon clicked, toggling menu...');
        menuIcon.classList.toggle("open");
        menuContainer.classList.toggle("show");
        // Hide the Replay button if it exists
        if (replayBtn) {
            replayBtn.style.display = "none";
        }
    };

    menuIcon.addEventListener("click", toggleMenu);
});