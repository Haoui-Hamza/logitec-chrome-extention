document.getElementById("apiButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "makeApiCall" }, (response) => {
      if (response.success) {
        document.getElementById("result").textContent = "API Call Successful!";
      } else {
        document.getElementById("result").textContent = "API Call Failed!";
      }
    });
  });

  