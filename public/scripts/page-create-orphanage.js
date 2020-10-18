// create map
const map = L.map('mapid').setView([-16.682897357398723, -49.2513656616211], 12)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})


// create market
let marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name="lat"]').value = lat
    document.querySelector('[name="lng"]').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon Layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

// add photo field
function addPhotoField() {
    // get photo container
    const container = document.querySelector('#images')

    // get container for duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // clone last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verify if input content is empty
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // clear new input container
    input.value = ""

    // add clone in the container #images
    container.appendChild(newFieldContainer)
}

// delete photo field
function deletePhotoField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

// change button "sim" or "não"
function toggleSelect(event) {
    // remove the ative class 
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active')
    });

    // set class active on button clicked
    const button = event.currentTarget
    button.classList.add('active')

    // update input hidden with value selected
    const input = document.querySelector('[name="open_on_weekends"]')

    // set input value
    input.value = button.dataset.value
}

function validate(event) {

}