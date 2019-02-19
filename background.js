let counter = 0;
chrome.tabs.onSelectionChanged.addListener(function() {
  console.log("tab changed");
  counter++;
  console.log("tab change count = " + counter);
})
