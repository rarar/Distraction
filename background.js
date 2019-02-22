let counter = 0;
chrome.tabs.onSelectionChanged.addListener(function() {
  console.log("tab changed");
  counter++;
  console.log("tab change count = " + counter);
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages
      localStorage.setItem(request.key, counter);
      if (request.type == 'fromPopup') {
        let data = JSON.parse(localStorage.getItem(request.key));
        sendResponse({
          data: counter
        });
      }
      console.log("listening");
    // should be included by default
    return true;
    }
  );
});
