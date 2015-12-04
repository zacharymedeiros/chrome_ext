//Retrieve URL of current tab
chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
});

//Store url string inside a variable
chrome.tabs.getSelected(null, function(tab) {
    var tabID = tab.url;
});



