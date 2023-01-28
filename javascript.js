mapboxgl.accessToken = 'pk.eyJ1Ijoic3Nyb2NrczMwIiwiYSI6ImNsZGVsNTdsOTBlbXgzd21xZmxmZTJ6a3EifQ.xIEeqAI2WPZb1JMWYplscA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [77.565581, 13.030850], // starting position [lng, lat]
zoom: 16, // starting zoom
});

const mylocation = [77.565362,13.030826]

var marker = new mapboxgl.Marker()
.setLngLat(mylocation)
.addTo(map);

// after saturation

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


