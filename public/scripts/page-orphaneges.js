// create map
const map = L.map('mapid').setView([-16.7094905, -49.2682496], 12);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
})
    .setContent('Lar das meninas <a class="choose-orphanege" href="orphanege.html?id=1"> <img src="/public/images/arrow-white.svg"></a>');

// create and market popup
L.marker([-16.7094905, -49.2682496], { icon })
    .addTo(map)
    .bindPopup(popup)