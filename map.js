// Student 13016874 acebri01 Mobile Application Development FMA//
//jquery to crate and upload the available map


//if page is the map page, inserts the map in the div allocated for the map
$(document).on("pagecontainershow", function (e, ui) {
    var page = ui.toPage[0].id;
    if (page == 'map-page') {

        x = navigator.geolocation;
        x.getCurrentPosition(success, failure);
        //If the geolocation is working the function sucess will get the map
        //getting user position
        function success(position) {
            var mylat = position.coords.latitude;
            var mylong = position.coords.longitude;

            var coords = new google.maps.LatLng(mylat, mylong);
            var mapOptions = {
                zoom: 16,
                center: coords,
            }


            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//locations to show including user location
            var locations = [
                        ['<h4>You are here</h4>', mylat, mylong],
                        ['<h4>Zedland University</h4>', 51.525435, -0.126596],
                        ['<p>Passfield Hall1 - 7 Endsleigh Pl Kings Cross, London </p><img src="images/flat1-5.jpeg"> <a href="zedlandblue.html">Blue House</a > ', 51.525188, -0.130759],
                        ['<p>Passfield Hall1 - 7 peppapig Pl Kings Cross, London </p><img src="images/flat2-3.jpeg"> <a href="zedlandred.html">Red House</a > ', 51.526018, -0.129559]
                    ];
            //creating the infowindow
            infowindow = new google.maps.InfoWindow({
                maxHeight: 400,
                maxWidth: 600
            });
            for (var i = 0; i < locations.length; i++) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    animation: google.maps.Animation.DROP
                });

                //click event
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                        }

                    })
                    (marker, i)
                );
            }

        }

        function failure() {
            $('#lat').html("<p>It didnt work</p>");
        }

    }

});
