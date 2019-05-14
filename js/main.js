/* $(document).ready(function() { //"document" refers to the app
  $.ajax("https://gist.githubusercontent.com/IanSchwarzenberg/fa86c50d8ee3f5ce3b7aafd4b1df2b3a/raw/f70829c27641e669b1898eb9eea98bdf36a88ecc/map.geojson").done(function(data) { //Extracts the unparsed/not-yet-mappable geoJSON from that link
    var parsedData = JSON.parse(data); //Parses the geoJSON to make it mappable, as opposed to its original format where it can't be mapped
    featureGroup = L.geoJson(parsedData, { // Creates a variable which stores the parsed geoJSON and adds it to the map (the "L.geoJson" means add geoJSON to mapp as a layer on it) based on the conditions (ex. the style)
      //style: myStyle //This makes the application loop through the slides' styles in the same way it loops through the slides themselves. This is where that big if else statement not long before this that deals with the slides' styles comes into play
    }).addTo(map_RITISIntersections);

})
}) */
