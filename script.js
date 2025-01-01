let hasClickedOnce = false; // Track if the user has clicked once

document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.querySelector('.cta-button');

    joinButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior

        if (!hasClickedOnce) {
            // First click: Open the ad link in a new background tab
            window.open('https://dub.sh/surftut24', '_blank');
            hasClickedOnce = true;
        } else {
            // Second click: Redirect to the intended destination
            window.location.href = 'https://dub.sh/whopclips';
        }
    });
});
