

chrome.runtime.onInstalled.addListener(() => {
    // This event listener will trigger when the extension is installed or updated.
    console.log("Extension installed or updated.");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "makeApiCall") {
      // Make an API call here using the fetch API or other methods.
      fetch("https://api.coronavirus.data.gov.uk/v1/data")
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);
          sendResponse({ success: true, data });
        })
        .catch((error) => {
          console.error("API Error:", error);
          sendResponse({ success: false, error });
        });
  
      return true; // Indicates that we will send a response asynchronously
    }
  });
  