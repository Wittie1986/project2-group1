// Slider Control set to Null

var sliderControl = null;

// Create map

var markers = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.dark",accessToken: API_KEY
});


var myMap = L.map("map", {
  center: [40.711801, -74.013120],
  zoom: 2.5,
  layers: markers
});


// API Query Variables

// var url = "../resources/gtd_0718.json";


// Create Markers
// ***NOTE: the d3.json function MUST have a url to call, edit document accordingly before going live***
d3.csv("../resources/gtdsample.csv", function(response) {

    console.log(response);

    var markers = L.markerClusterGroup.layerSupport();
    var layerGroup = L.layerGroup(location);

    for (var i = 0; i < response.length; i++) {
        var location = L.latLng({ lat: response[i].latitude, lng: response[i].longitude });
        
        markers.addLayer(L.marker(location)
            .bindPopup("<h3>" + response[i].imonth +
            "/" + response[i].iday +
            "/" + response[i].iyear +
            "; " + response[i].city +
            ", " + response[i].country_txt +
            ": " + response[i].attacktype1_txt +
            "</h3>"));
        
            };

// Add marker clusters to map
    
    markers.addTo(myMap);
    markers.checkIn(layerGroup);

    layerGroup.addTo(myMap);


// Add Slider Functions

    var sliderLayer = L.geoJson(response);
    var sliderControl = L.control.sliderControl({
        position: "bottomright",
        layer: markers,
        range: true
    });


// Add Slider to map
    
    myMap.addLayer(sliderLayer);
    myMap.addControl(sliderControl);

// Initialize Slider

    sliderControl.startSlider();


  

});







