chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "TRANSCRIPT") {
    console.log("Received transcript:", message.data);
    // TODO: integrate GitHub Models API call later
  }
});
