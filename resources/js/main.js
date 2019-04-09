$(document).ready(function(){
    
/*map*/

    var map =  new GMaps({
      div: '.map',
      lat: 25.0412255,
      lng: 121.5554367
    });
    
    map.addMarker({
      lat: 25.0412255,
      lng: 121.5554367,
      title: 'Office',
      infoWindow: {
          content: '<p>Taipei office</p>'
      }
    });
    
});