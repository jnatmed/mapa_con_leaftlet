
const btn_localizar = document.querySelector("#buscar")


function localizar() {
    var X = document.getElementById("latitud").value;
    var Y = document.getElementById("longitud").value;
    
    // alert(X);
    // "-34.64572", "-58.39917"
    var map = L.map('map').setView(new L.LatLng(X, Y), 18);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

btn_localizar.addEventListener("click", function(e) {
    localizar();
})
