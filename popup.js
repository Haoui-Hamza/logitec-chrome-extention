/*
document.getElementById("apiButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "makeApiCall" }, (response) => {
        if (response.success) {
            console.log("API Call Successful!")
            document.getElementById("result").textContent = "API Call Successful!";
        } else {
            console.log("API Call Failed!")
            document.getElementById("result").textContent = "API Call Failed!";
        }
    });
});
* */


document.addEventListener('DOMContentLoaded', function () {
    console.log("content loaded")
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];


        chrome.action.getBadgeText({ tabId: tab.id }, function (result) {
            const selectedText = result || 'No text selected';
            document.getElementById('selectedText').textContent = selectedText;
        });

        chrome.action.getBadgeText({ tabId: tab.id }, function (result) {
            const gptResponse = result || 'No text selected';
            console.log(gptResponse)
            document.getElementById('result').textContent = selectedText;

        });
    });
});

