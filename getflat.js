// Student 13016874 acebri01 Mobile Application Development FMA//

//page my likes, gets details using getflatdetails function
$(document).on("pagecontainerbeforeshow", function (e, ui) {
    var page = ui.toPage[0].id;
    if (page == 'mylikes') {
        if (typeof (Storage) != "undefined") {
            displayFlatDetails(getFlatDetails());
        } else {
            $("#nostorage").text("Local storage not supported");
        }
    }
});
//getting the details to display using displayflatDetails function
function getFlatDetails() {
    var flatDetails = JSON.parse(localStorage.getItem('accommodation'));
    if (flatDetails == null) flatDetails = [];
    return flatDetails;
}
// using the name of the page creates the url
function displayFlatDetails(details) {
    var flat = "";
    for (var i = 0; i < details.length; i++) {
        flat += "<a href='" +
            details[i].flaturl +
            ".html' class='ui-btn ui-corner-all ui-icon-arrow-r ui-btn-icon-right'>" +
            details[i].name + "</a><br/>";
        
    }
    $("#flat").html(flat);
}
