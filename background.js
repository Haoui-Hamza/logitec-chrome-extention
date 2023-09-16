

chrome.runtime.onInstalled.addListener(() => {
    // This event listener will trigger when the extension is installed or updated.
    console.log("Extension installed or updated.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "makeApiCall") {
        // Make an API call here using the fetch API or other methods.
        console.log("hello2")

        return true; // Indicates that we will send a response asynchronously
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)
    if (request.selectedText) {
      // Handle the selected text, e.g., display it in a popup
      console.log(request.selectedText)
      chrome.action.setBadgeText({ text: request.selectedText, tabId: sender.tab.id });
    }
    if(request.response){
        chrome.action.setBadgeText({ text: request.response, tabId: sender.tab.id });
    }
  });
