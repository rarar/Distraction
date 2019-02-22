let time = Date.now() / 1000;

chrome.tabs.getAllInWindow(function(tabs) {
    document.getElementById("tab_count").innerHTML = tabs.length;
});


  chrome.runtime.sendMessage({
      type: "fromPopup"
    },
    function(response) {
      if (response) {
        displayData(response.data)
      } else {
        displayData(0);
      }
    }
  );

function displayData(data) {
  document.getElementById("onChange").innerHTML = data;
}
