    // Get references to the buttons, web projects container, instruction message, and controls
    const showWebProjectsButton = document.getElementById('showWebProjectsButton');
    const hideWebProjectsButton = document.getElementById('hideWebProjectsButton');
    const webProjectsContainer = document.getElementById('webProjectsContainer');
    const showMessage = document.getElementById('show-message');
    const controlsDiv = document.getElementById('controlsDiv'); // Added line

    // Add a click event listener to the "SHOW" button
    showWebProjectsButton.addEventListener('click', () => {
        // Show the web projects container
        webProjectsContainer.style.display = 'block';
        // Hide the "SHOW" button
        showWebProjectsButton.style.display = 'none';
        // Show the "HIDE" button
        hideWebProjectsButton.style.display = 'inline-block';
        // Hide the instruction message
        showMessage.style.display = 'none';
        // Hide the controls (Prev and Next buttons)
        controlsDiv.style.display = 'none'; // Added line
    });

    // Add a click event listener to the "HIDE" button
    hideWebProjectsButton.addEventListener('click', () => {
        // Hide the web projects container
        webProjectsContainer.style.display = 'none';
        // Show the "SHOW" button
        showWebProjectsButton.style.display = 'inline-block';
        // Hide the "HIDE" button
        hideWebProjectsButton.style.display = 'none';
        // Show the instruction message
        showMessage.style.display = 'block';
        // Show the controls (Prev and Next buttons)
        controlsDiv.style.display = 'block'; // Added line
    }); 