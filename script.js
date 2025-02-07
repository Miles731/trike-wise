const apiKey = "5b3ce3597851110001cf62482e164933e1e74f7cacaed4b75597f284"; // Replace with your API Key

// Initialize map centered on Caloocan
var map = L.map("map").setView([14.65, 120.98], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

let startMarker = null, endMarker = null, routeLine = null;

// Click event to set start and end points
map.on("click", function (e) {
    if (!startMarker) {
        startMarker = L.marker(e.latlng).addTo(map).bindPopup("Start Point").openPopup();
    } else if (!endMarker) {
        endMarker = L.marker(e.latlng).addTo(map).bindPopup("End Point").openPopup();
        getRoute(startMarker.getLatLng(), endMarker.getLatLng());
    } else {
        // Reset if both points are already set
        map.removeLayer(startMarker);
        map.removeLayer(endMarker);
        if (routeLine) map.removeLayer(routeLine);
        startMarker = L.marker(e.latlng).addTo(map).bindPopup("Start Point").openPopup();
        endMarker = null;
    }
});

// Function to get route and calculate fare
function getRoute(start, end) {
    const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.routes || data.routes.length === 0) {
                throw new Error("No route found. Try selecting roads.");
            }

            const coordinates = data.routes[0].geometry.coordinates;
            const latlngs = coordinates.map(coord => [coord[1], coord[0]]);
            if (routeLine) map.removeLayer(routeLine);
            routeLine = L.polyline(latlngs, { color: "blue" }).addTo(map);

            const distanceKm = data.routes[0].distance / 1000; // Convert meters to km
            const distanceText = distanceKm.toFixed(2) + " km"; // Format distance to 2 decimal places

            // Update distance on the page
            document.getElementById("distance").innerText = distanceText;

            // Calculate and update fare
            calculateFare(distanceKm);
        })
        .catch(error => {
            console.error("Error fetching route:", error);
            alert("Failed to fetch route. Try selecting roads.");
        });
}




// Function to calculate tricycle fare
function calculateFare(distance) {
    const baseFare = 20; // Base fare in PHP
    const ratePerKm = 10; // Rate per km in PHP
    const totalFare = baseFare + (distance * ratePerKm);
    
    document.getElementById("fare").innerText = totalFare.toFixed(2);
}
