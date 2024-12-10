function initMap() {
    // Capturar os parâmetros da URL (latitude e longitude)
    var urlParams = new URLSearchParams(window.location.search);
    var lat = parseFloat(urlParams.get('lat'));
    var lng = parseFloat(urlParams.get('lng'));

    // Localização da foto a partir dos parâmetros
    var location = { lat: lat, lng: lng };
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Local da Foto",
    });
}
