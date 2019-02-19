let time = Date.now() / 1000;

chrome.tabs.getAllInWindow(function(tabs) {
    document.getElementById("tab_count").innerHTML = tabs.length;
});
