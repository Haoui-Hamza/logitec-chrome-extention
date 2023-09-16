// Function to make the API call
function makeAPICall() {
    // Replace this with your API call logic
    fetch('https://api.coronavirus.data.gov.uk/v1/data')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Make an initial API call when the content script is injected into a page
  makeAPICall();
  
  // Set an interval to make API calls every 2 seconds
  setInterval(makeAPICall, 2000);