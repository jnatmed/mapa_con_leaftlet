const btn_localizar = document.querySelector("#localizar")

btn_localizar.addEventListener("click", function(e) {
    localizar();
})

const btn_agregar = document.getElementById("agregar")

btn_agregar.addEventListener("click", function(e) {
    alert("agregando marca..!..aAh re que no agregaba nada, que bolu..");
    agregar();
})

function localizar() {
    var X = document.getElementById("latitud").value;
    var Y = document.getElementById("longitud").value;
    
    // alert(X);
    // "-34.64572", "-58.39917"
    // var map = L.map('map').setView(new L.LatLng(X, Y), 18);
    var map = L.map('map');
    map.off();
    // if(map != null){
    //     map._leaflet_id = null;
    // }
    map.setView(new L.LatLng(X, Y), 15);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([X, Y]).addTo(map);
    
}

function agregar() {

    alert('agregando marca..va, ponele que la agrego..:(');
    var map = L.map('map'); 
    L.marker(["-34.64570", "-58.41920"]).addTo(map);

    // var circle = L.circle(["-34.64572", "-58.40920"], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 500
    // }).addTo(map);

    // marker.bindPopup("<b>Hola mundo!</b><br>Soy un popup.").openPopup();
    // circle.bindPopup("Hola soy un circulo");
    // polygon.bindPopup("Hola soy un poligono");

}

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

// var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'leaf-shadow.png',
//         iconSize:     [38, 95],
//         shadowSize:   [50, 64],
//         iconAnchor:   [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor:  [-3, -76]
//     }
// });

// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
//     redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
//     orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

// L.icon = function (options) {
//     return new L.Icon(options);
// };


// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
// L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
// L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");

