let dropdownMenus = document.querySelectorAll('yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer');

let numberOfTimesToExecute = dropdownMenus.length;
console.log(numberOfTimesToExecute);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeVideos() {
    for (let i = 0; i < numberOfTimesToExecute; i++) {
        for (let j = 0; j < 2; j++) {
            let dropdownMenus = document.querySelectorAll('yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer');

            console.log("Dropdown buttons found:", dropdownMenus);
            console.log("Number of dropdown menus:", dropdownMenus.length);

            let firstVideoMenu = dropdownMenus[2];

            // Simulate the click to open the dropdown menu
            firstVideoMenu.click();
            console.log(`firstVideoMenu clicked!`);

            let revealedButtons = document.querySelectorAll('tp-yt-paper-item[role="option"][aria-disabled="false"] yt-formatted-string');
            console.log(revealedButtons);

            let deleteButton = revealedButtons[2];

            // Find the closest tp-yt-paper-item parent of the third button
            let buttonToClick = deleteButton.closest('tp-yt-paper-item');

            // Simulate the click to remove the video
            buttonToClick.click();

            // Add a delay to prevent rate-limiting
            await delay(1500); // Adjust this value (1500ms = 1.5 seconds)
        }
    }
}

// Start the process
removeVideos();
