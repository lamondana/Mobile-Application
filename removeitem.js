$(document).on("pagecreate", function () {
    $("#addbtn1").click(function () {
        if (typeof (Storage) != "undefined") {
            setDetails(getTitle(), getUrl());
        } else {
            $("#nostorage").text("The browser does not support local storage");
        }
    });
});

function getTitle() {
    var flatName = $("#favourites").text();
    return flatName;
}

function getUrl() {
    var flatName = $("#favourites").text();
    var url = flatName.toLowerCase();
    return url;
}