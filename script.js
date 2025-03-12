mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXM3MzEiLCJhIjoiY203cmtlbDVuMDUxZjJ4cGw0azJqYmo5MyJ9.6mnMZ8rwnnBM6FYQfqA6QQ';

// 🔹 Fixed Locations & Fares
const fixedLocations = [
    { name: "St. Joseph, Caloocan", center: [121.03454454498296, 14.74545533933184] },
    { name: "Saranay Road, Caloocan", center: [121.02659359996306, 14.755813591900235] },
    { name: "Barangay A, Caloocan", center: [121.025, 14.735] }
];

const fixedFares = [
    { origin: "St. Joseph, Caloocan", destination: "Saranay Road, Caloocan", fare: 15 },
    { origin: "Poblacion, Caloocan", destination: "Barangay A, Caloocan", fare: 12 },
    { origin: "Bagong Silang, Caloocan", destination: "Barangay A, Caloocan", fare: 10 }
];

// 🔹 Initialize Map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [121.0333, 14.7458],
    zoom: 15
});

let startMarker = null;
let endMarker = null;

// 🔹 Add Fixed Location Markers
function addFixedLocationMarkers() {
    fixedLocations.forEach(place => {
        new mapboxgl.Marker({ color: "green" })
            .setLngLat(place.center)
            .setPopup(new mapboxgl.Popup().setText(place.name))
            .addTo(map);
    });
}
function getFixedFare(origin, destination) {
    origin = origin.trim().toLowerCase();
    destination = destination.trim().toLowerCase();

    console.log("Checking fare for:", origin, "→", destination); // Debugging

    const fareEntry = fixedFares.find(route =>
        route.origin.trim().toLowerCase() === origin &&
        route.destination.trim().toLowerCase() === destination
    );

    console.log("Fare found:", fareEntry ? fareEntry.fare : "None"); // Debugging

    return fareEntry ? fareEntry.fare : null;
}
// 🔹 Handle Map Clicks
map.on("click", function (e) {
    const lngLat = e.lngLat;

    if (!startMarker) {
        startMarker = new mapboxgl.Marker({ color: "red" })
            .setLngLat(lngLat)
            .setPopup(new mapboxgl.Popup().setText("Start Point"))
            .addTo(map);
        document.getElementById("startLocation").value = `${lngLat.lng}, ${lngLat.lat}`;
    } else if (!endMarker) {
        endMarker = new mapboxgl.Marker({ color: "blue" })
            .setLngLat(lngLat)
            .setPopup(new mapboxgl.Popup().setText("End Point"))
            .addTo(map);
        document.getElementById("endLocation").value = `${lngLat.lng}, ${lngLat.lat} `;

        getRoute(startMarker.getLngLat(), endMarker.getLngLat());
    } else {
        resetMarkers(lngLat);
    }
});

// 🔹 Fetch Suggestions
function fetchSuggestions(query, type) {
    if (!query.trim()) {
        document.getElementById(`${type}Suggestions`).classList.remove("show");
        return;
    }

    const mapboxToken = "pk.eyJ1IjoibWlsZXM3MzEiLCJhIjoiY203cmtlbDVuMDUxZjJ4cGw0azJqYmo5MyJ9.6mnMZ8rwnnBM6FYQfqA6QQ";
    const bbox = "120.9657,14.5781,121.0473,14.7665";
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}&autocomplete=true&limit=5&bbox=${bbox}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const suggestionsList = document.getElementById(`${type}Suggestions`);
            suggestionsList.innerHTML = "";

            let suggestions = fixedLocations.filter(place => place.name.toLowerCase().includes(query.toLowerCase()));
            const mapboxResults = data.features
                .filter(place => place.place_name.includes("Caloocan"))
                .map(place => ({ name: place.place_name, center: place.center }));

            suggestions = [...suggestions, ...mapboxResults];

            if (suggestions.length === 0) {
                suggestionsList.classList.remove("show");
                return;
            }

            suggestions.forEach(place => {
                const li = document.createElement("li");
                li.className = "dropdown-item";
                li.textContent = place.name;
                li.onclick = () => selectSuggestion(place, type);
                suggestionsList.appendChild(li);
            });

            // 🔹 Ensure Bootstrap dropdown is visible
            suggestionsList.classList.add("show");
        })
        .catch(error => console.error("Error fetching suggestions:", error));
}

// 🔹 Select Suggestion
function selectSuggestion(place, type) {
    const inputField = document.getElementById(`${type}Location`);
    const suggestionsList = document.getElementById(`${type}Suggestions`);

    inputField.value = place.name;
    suggestionsList.classList.remove("show");

    const coords = new mapboxgl.LngLat(place.center[0], place.center[1]);

    if (type === "start") {
        if (startMarker) startMarker.remove();
        startMarker = new mapboxgl.Marker({ color: "red" }).setLngLat(coords).setPopup(new mapboxgl.Popup().setText("Start Point")).addTo(map);
        document.getElementById("startLocation").value = `${place.center[1]}, ${place.center[0]}`;
    } else if (type === "end") {
        if (endMarker) endMarker.remove();
        endMarker = new mapboxgl.Marker({ color: "blue" }).setLngLat(coords).setPopup(new mapboxgl.Popup().setText("End Point")).addTo(map);
        document.getElementById("endLocation").value = `${place.center[1]}, ${place.center[0]}`;

        if (startMarker) getRoute(startMarker.getLngLat(), endMarker.getLngLat());
    }
}

// 🔹 Reset Markers
function resetMarkers(lngLat) {
    if (startMarker) startMarker.remove();
    if (endMarker) endMarker.remove();

    startMarker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(lngLat)
        .setPopup(new mapboxgl.Popup().setText("Start Point"))
        .addTo(map);

    endMarker = null;
    document.getElementById("startLocation").value = `${lngLat.lat}, ${lngLat.lng}`;
    document.getElementById("endLocation").value = "";
}

// 🔹 Get Fixed Fare


// 🔹 Fetch Route & Calculate Fare
function getRoute(start, end) {
    const startLoc = `${start.lng},${start.lat}`;
    const endLoc = `${end.lng},${end.lat}`;
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLoc};${endLoc}?geometries=geojson&access_token=pk.eyJ1IjoibWlsZXM3MzEiLCJhIjoiY203cmtlbDVuMDUxZjJ4cGw0azJqYmo5MyJ9.6mnMZ8rwnnBM6FYQfqA6QQ`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.routes || data.routes.length === 0) throw new Error("No route found.");
            const coordinates = data.routes[0].geometry.coordinates;

            if (!map.getSource("route")) {
                map.addSource("route", { 
                    type: "geojson", 
                    data: { 
                        type: "Feature", 
                        geometry: { type: "LineString", coordinates } 
                    } 
                });

                map.addLayer({ 
                    id: "route", 
                    type: "line", 
                    source: "route", 
                    layout: { "line-join": "round", "line-cap": "round" }, 
                    paint: { "line-color": "#007bff", "line-width": 5 } 
                });
            } else {
                map.getSource("route").setData({ 
                    type: "Feature", 
                    geometry: { type: "LineString", coordinates } 
                });
            }

            const startLocationName = document.getElementById("startLocation").value.trim();
            const endLocationName = document.getElementById("endLocation").value.trim();
            
            const fixedFare = getFixedFare(startLocationName, endLocationName);
            
            if (fixedFare !== null) {
                document.getElementById("fareAmount").innerText = `Fixed Fare: ₱${fixedFare.toFixed(2)}`;
            } else {
                const distanceKm = data.routes[0].distance / 1000;
                document.getElementById("distance").innerText = `${distanceKm.toFixed(2)} km`;
                const fare = 25 + (distanceKm * 10);
                document.getElementById("fareAmount").innerText = `Estimated Fare: ₱${fare.toFixed(2)}`;
            }
        })
        .catch(error => alert("Failed to fetch route. Try again."));
}


map.on("load", function () {
    addFixedLocationMarkers();
});