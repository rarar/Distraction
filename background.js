let date = Date.now();

chrome.runtime.onInstalled.addListener(function() {
  console.log("on installed called");
  chrome.tabs.getAllInWindow(function(tabs) {
    console.log("num tabs = " + tabs.length);
  })
});

chrome.tabs.onSelectionChanged.addListener(function() {
  console.log("tab changed");
  let timeOnTab = Date.now() - date;
})
