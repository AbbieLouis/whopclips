let hasClickedOnce = false; // Track if the user has clicked once

document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.querySelector('.cta-button');

    joinButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior

        if (!hasClickedOnce) {
            // First click: Open ad in a background tab without switching focus
            const adWindow = window.open('https://dub.sh/surftut24', '_blank');
            if (adWindow) {
                adWindow.blur(); // Attempt to remove focus from the new tab
                window.focus(); // Refocus on the current tab
            }
            hasClickedOnce = true;
        } else {
            // Second click: Redirect to the intended destination
            window.location.href = 'https://dub.sh/whopclips';
        }
    });
});
