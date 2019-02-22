let counter = 0;
let oldTime = new Date();
let newTime;
let timeIntervals = [];
chrome.tabs.onSelectionChanged.addListener(function() {
  console.log("tab changed");
  newTime = new Date();
  let intervalToPush = newTime - oldTime;
  timeIntervals.push(intervalToPush);
  oldTime = newTime;

  console.log("Interval = " + intervalToPush);
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
