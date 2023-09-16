
function makeAPICall(subject) {
    // Replace this with your API call logic

    fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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', // Replace with your API key
                },
                body: JSON.stringify({
                    "model":"gpt-3.5-turbo",
                    "messages": [
                      {
                        "role": "system",
                        "content": "You are a helpful assistant."
                      },
                      {
                        "role": "user",
                        "content": `i need to know some basic essenssial summerized information about ${subject} `
                      }
                    ]
                })
            })
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


// Listen for mouseup events (when the user releases the mouse button after selecting text)
document.addEventListener('mouseup', function () {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        // Send the selected text to the background script
        chrome.runtime.sendMessage({ selectedText: selectedText });
        makeAPICall(selectedText)
    }
});



 