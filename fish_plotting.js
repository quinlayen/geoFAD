
$(function () {
    var fishIcon = L.icon({
        iconUrl: './images/fish.png',
        iconSize: [20, 20],
        iconAnchor: [0, 0],
        popupAnchor: [10, 10]
    });

    var fishLayer = new L.layerGroup();
    $.getJSON('./data/fish.json', function (data) {
        $.each(data.fish, function (i, fish) {
            const marker = L.marker([fish.latitude, fish.longitude], { icon: fishIcon }).bindPopup(fish.name.join());
            fishLayer.addLayer(marker)
        })

    })
    htmlFish = '<font color="red">Fish layer</font>'
    layerControl.addOverlay(fishLayer, htmlFish);
    map.addLayer(fishLayer)
});