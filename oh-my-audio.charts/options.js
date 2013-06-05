function save_options() {
    localStorage["number_of_tracks"] = document.getElementById("number_of_tracks").value;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = chrome.i18n.getMessage("saved");
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

function restore_options() {
    document.getElementById("number_of_tracks").value = localStorage["number_of_tracks"];
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

var objects = document.getElementsByTagName('*');
for(var i = 0; i < objects.length; i++) {
    if (objects[i].dataset && objects[i].dataset.message) {
        objects[i].innerHTML = chrome.i18n.getMessage(objects[i].dataset.message);
    }
}
