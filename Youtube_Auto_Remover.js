// Might have to "copy paste run" it a few times first in the console to "get it going".
// It can just stop after a few tens of videos too. So you'll have to restart it- still better than doing it manually but...


// BASED ON THE PLAYLIST YOU WANT TO AUTO-DELETE CHANGE THE LINE BELOW ACCORDINGLY!!!
// let deleteButton = revealedButtons[6]; - it's for LIKED VIDEOS
// let deleteButton = revealedButtons[2]; - it's for WATCHED VIDEOS


let dropdownMenus = document.querySelectorAll('yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer');

let numberOfTimesToExecute = dropdownMenus.length;
//console.log(numberOfTimesToExecute);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeVideos() {
    for (let i = 0; i < numberOfTimesToExecute; i++) {
        for (let j = 0; j < 2; j++) {
            let dropdownMenus = document.querySelectorAll('yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer');

            //console.log("Dropdown buttons found:", dropdownMenus);
            //console.log("Number of dropdown menus:", dropdownMenus.length);

            let firstVideoMenu = dropdownMenus[2];

            // Simulate the click to open the dropdown menu
            firstVideoMenu.click();
            //console.log(`firstVideoMenu clicked!`);

            let revealedButtons = document.querySelectorAll('tp-yt-paper-item[role="option"][aria-disabled="false"] yt-formatted-string');
            //console.log(revealedButtons);

            let deleteButton = revealedButtons[2];

            //let buttonToClick = deleteButton.closest('tp-yt-paper-item');
            let buttonToClick = deleteButton.parentElement;

            // Simulate the click to remove the video
            buttonToClick.click();

            // Add a delay to prevent rate-limiting
            await delay(100); // Adjust this value (1500ms = 1.5 seconds)
        }
    }
}

// Start the process
removeVideos();
