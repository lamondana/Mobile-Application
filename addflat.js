//Student 13016874 acebri01 Mobile Application Development FMA-

//checking if thre is local storage available as user click on the I like button
$(document).on("pagecreate", function () {
    $("#addbtn").click(function () {
        if (typeof (Storage) != "undefined") {
            setDetails(getTitle(), getUrl());
        } else {
            $("#nostorage").text("The browser does not support local storage");
        }
    });
    //remove item button checking for local storage
    $("#removebtn").click(function () {
        if (typeof (Storage) != "undefined") {
            removeDetails(getTitle(), getUrl());
        } else {
            $("#nostorage").text("The browser does not support local storage");
        }
    });
});
//getting details of the flat to create the name , url checks if the flat is already in the list
function getTitle() {
    var flatName = $("#favourites").text();
    return flatName;
}

function getUrl() {
    var flatName = $("#favourites").text();
    var url = flatName.toLowerCase();
    return url;
}

function setDetails(flatName, url) {
    var favouriteFlat = {
        name: flatName,
        flaturl: url
    };
    var existingData = [];
    existingData = JSON.parse(localStorage.getItem("accommodation"));

    if (existingData == null) existingData = [];
    
    var bResult = false;
    for( i = 0; i<existingData.length; i++){
        if (favouriteFlat.name == existingData[i].name)
            {
                bResult = true;
            }
    }
 //pushing new flat to the local storage array  
    if(!bResult) {
        existingData.push(favouriteFlat);
        
    }
    

    localStorage.setItem("accommodation", JSON.stringify(existingData));
}
//remove details from local storage when I dont like it button is click
function removeDetails(flatName, url){
    var favouriteFlat = {
        name: flatName,
        flaturl: url
    };
    var existingData = [];
    existingData = JSON.parse(localStorage.getItem("accommodation"));
    var bResult = -1;
    for( i = 0; i<existingData.length; i++){
        if (favouriteFlat.name == existingData[i].name)
            {
                bResult = i;
            }
    }
    if(bResult > -1) {
        existingData.splice(bResult, 1);
    
}
     localStorage.setItem("accommodation", JSON.stringify(existingData));
}


