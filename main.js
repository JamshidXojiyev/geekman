$(document).ready(function () {

    // Variables
    // let w = this.width();
    // let h = this.width();
    // let url = this.get('document.preview')

    // Declare Map Object
    var map = L.map('map').setView([0,0], 3);

    // Refrence the tiles
    L.tileLayer('map/{z}/{x}/{y}.png', {
        minZoom: 3,
        maxZoom: 6,
        continuousWorld: false,
        noWrap: true,
        // crs: L.CRS.Simple
    }).addTo(map);

    // map.setMaxBounds(new L.LatLngBounds(
    //     map.unproject([0,16384], map.getMaxZoom());
    // ));

    // let center = zoomMap.unproject([w/2, h/2])
    // zoomMap.setView(center);

    // map.setMaxBounds(new L.LatLngBounds(
    //     map.unproject([0, 262144], map.getMaxZoom()), 
    //     map.unproject([262144, 0], map.getMaxZoom())
    // ));

    // Markers and Popups
    // var marker = L.marker([0,0], {
    //     draggable:true,
    // }).addTo(map);
    // marker.bindPopup('<h3>Hello World</h3>');

    // var polygonCoordination;
    // marker.on('dragend', function (e) {
    //     alert(marker.getLatLng().toString());
    // });
    
    var b5 = L.polygon([[25.185059, -12.678223], [27.1, -16.899],
        [28.05, -16.962891], [28.6, -15.117188],[28.478349, -14.89], [28.99, -14.919434],
        [29.1, -15.2], [31.690782, -5.097656], [30.826781, -2.8125], [30.751278, -2.966309],
        [28.07198, -2.900391], [27.000408, -6.591797], [26.863281, -6.591797], [26.549223, -6.306152],
        [26.076521, -8.02002], [26.135714, -8.261719], [25.799891, -9.558105], [25.977799, -10.085449]],
        {color: '#ffffff00', fillColor: "#00ff1100", fillOpacity: 1, weight: 2}).addTo(map);
    // b5.on('click', function () {
    //     // alert(e.lat);
    //     // map.setView([e.lat, e.lng], 6);
    //     map.setView([27.839076, -9.316406], 6);
    // });
    b5.on({
        mouseover: function(e) {$(e.target.getElement()).addClass("active");},
        mouseout: function(e) {$(e.target.getElement()).removeClass("active");},
        click: function (e) {map.setView([27.839076, -9.316406], 6);}
    });    

});