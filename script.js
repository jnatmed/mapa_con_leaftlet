// var map = L.map('map').setView([-34.64568, -58.39916], 13);
var map = L.map('map').setView(new L.LatLng(-34.64568, -58.39916), 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
