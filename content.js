// Function to make the API call

function getSelectedText() {
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (window.document.getSelection) {
        txt = window.document.getSelection();
    } else if (window.document.selection) {
        txt = window.document.selection.createRange().text;
    }
    return txt;
}

// Listen for mouseup events (when the user releases the mouse button after selecting text)
document.addEventListener('mouseup', function () {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        // Send the selected text to the background script
        chrome.runtime.sendMessage({ selectedText: selectedText });
    }
});

function makeAPICall() {
    // Replace this with your API call logic

    fetch('https://api.coronavirus.data.gov.uk/v1/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data) {
                console.log("data is here")

            }
        })
        .catch(error => {
            console.error(error);
        });
}

// Make an initial API call when the content script is injected into a page
makeAPICall();
//console.log(getSelectedText())

// Set an interval to make API calls every 2 seconds
setInterval(makeAPICall, 2000);