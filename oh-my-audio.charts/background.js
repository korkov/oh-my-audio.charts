if (localStorage["number_of_tracks"] == undefined)
    localStorage["number_of_tracks"] = 20;

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "oh-my-audio-charts")
      sendResponse(localStorage);
    else
      sendResponse({});
});
