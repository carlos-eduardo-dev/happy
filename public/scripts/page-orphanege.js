const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-16.7094905, -49.2682496], 14.5);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg",
    iconSize: [48, 58],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create and market popup
L.marker([-16.7094905, -49.2682496], { icon })
    .addTo(map)

// image gallery 

function selectImage(event) {
    const button = event.currentTarget

    // remove class active
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach((button) => {
        button.classList.remove("active")
    });

    // add class active to button
    button.classList.add('active')

    // select image
    const image = button.children[0];

    const imageContainer = document.querySelector(".orphanege-details > img")

    imageContainer.src = image.src


    // update container image
}