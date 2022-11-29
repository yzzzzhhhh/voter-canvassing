function initializevoteMap () {
    let voteMap = L.map('vote-map').setView([39.952436849966794,-75.16356820883757], 11);

    const mapboxAccount = 'mapbox';
    const mapboxStyle = 'light-v10';
    const mapboxToken = 'pk.eyJ1IjoieWVzZW5pYW8iLCJhIjoiY2tlZjAyM3p5MDNnMjJycW85bmpjenFkOCJ9.TDYe7XRNP8CnAto0kLA5zA';
    L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxAccount}/${mapboxStyle}/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxToken}`, {
    maxZoom: 19,
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
}).addTo(voteMap);

    return voteMap;
}



// Create a function to transform one of the voter elements into a GeoJSON-like feature
/*function makevoterFeature(voter) {
    return {
      "type": "Feature",
      "ID": voter['ID Number'],
      "properties": {

        "Last Name": voter['Last Name'],
        "First Name": voter['First Name'],
        "Middle Name": voter['Middle Name'],
        "Gender": voter['Gender'],
        "DOB": voter['DOB'],
        "Registration Date": voter['Registration Date'],
        "Status Change Date": voter['Status Change Date'],
        "Party Code": voter['Party Code'],
        "House Number": voter['House Number'],
        "House Number Suffix": voter['House Number Suffix'],
        "Street Name": voter['Street Name'],
        "Apartment Number": voter['Apartment Number'],
        "Address Line 2": voter['Address Line 2'],
        "City": voter['City'],
        "State": voter['State'],
        "Zip": voter['Zip'],
        "TIGER/Line Match Status": voter['Line Match Status'],
        "TIGER/Line Match Type": voter['Line Match Type'],
        "TIGER/Line Matched Address": voter['Line Matched Address'],
        "Major Intervention Year":voter['Major Intervention Year'],
        "Management Organization": voter['Management Organization'],
        "Multiple Addresses": voter['Multiple Addresses'],
    },
      "geometry": voter['geom'],
    };
}*/


export {
    initializevoteMap,
 };