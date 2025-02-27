const fixedFares = [
    {
        start: "VBS Vicas Toda Terminal",
        destination: "KINGSTOWN 1 (LABAS)",
        fare: 25,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.750291539483896, 121.02616007334589] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "KINGSTOWN 1 (LOOB)",
        fare: 33,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.750818758561568, 121.0295702601841] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "CONGRESS TAAS",
        fare: 30,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.752727954144857, 121.03213556030043] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "CONGRESS BABA ELEM.",
        fare: 28,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.754296224973649, 121.03248137375118] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "STA CRUZ LABAS",
        fare: 35,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.75305658380377, 121.03585462109264] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "KINGSTOWN 2 / QUEENS VILL",
        fare: 40,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.757047802414954, 121.04492884968347] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "SARANAY KANTO",
        fare: 32,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.754973305149063, 121.02582600188619] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "HIGH VIEW",
        fare: 30,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.748674365089279, 121.03338719350015] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "DIVINE",
        fare: 35,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.749308499566313, 121.03124877134996] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "CELERINA",
        fare: 38,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.755519919825627, 121.03637411338609] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "KINGSTOWN ENCLAVES",
        fare: 40,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.755192461507843, 121.02595142400011] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "CELINA 3",
        fare: 42,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.752411935821465, 121.02534802426956] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "SENATE 1",
        fare: 45,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.76139377408, 121.03297226148044] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "SENATE 2",
        fare: 47,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.759611819319753, 121.03200929459089] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "PRINCE TOWN",
        fare: 35,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.7583810928777, 121.02237919176753] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "KALIKASAN",
        fare: 50,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.759702717257055, 121.0296699334875] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "MBA / CLAMOR COMP.",
        fare: 55,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.761562469276637, 121.02765169674579] // Approximate location
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "BANKERS (GATE)",
        fare: 60,
        startLatLng: [14.748574135053765, 121.03478537677161], // Approximate location of Vicas
        destinationLatLng: [14.76200, 121.05300] // Approximate location
    },{
        start: "VBS Vicas Toda Terminal",
        destination: "BANKERS (GATE)",
        fare: 33,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7657470968706, 121.02413111162818] 
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "SARANAY",
        fare: 33,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.755130211321655, 121.02580122029899]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "UNION VILLAGE",
        fare: 33,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7540, 121.0430]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "MAKISIG",
        fare: 33,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7550, 121.0440]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "BHS / SOFIA",
        fare: 25,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7560, 121.0450]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "MANGGAHAN",
        fare: 30,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7570, 121.0460]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "UCC / SCIENCE HS",
        fare: 45,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7580, 121.0470]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "SPORTS COMPLEX",
        fare: 60,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7590, 121.0480]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "CITATION",
        fare: 40,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7600, 121.0490]
    },
    {
        start: "VBS Vicas Toda Terminal",
        destination: "PALMERA 5 / CARRISSA",
        fare: 35,
        startLatLng: [14.7321, 121.0198],
        destinationLatLng: [14.7610, 121.0500]
    },


    {
        start: "Kingstown 1",
        destination: "Puregold Deparo",
        fare: 45,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7575, 121.0182] // Approximate location of Puregold Deparo
    },
    {
        start: "Kingstown 1",
        destination: "Franvill",
        fare: 70,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7541, 121.0160] // Approximate location of Franvill
    },
    {
        start: "Kingstown 1",
        destination: "Villa Luisa",
        fare: 55,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7592, 121.0225] // Approximate location of Villa Luisa
    },
    {
        start: "Kingstown 1",
        destination: "Evergreen (Labas)",
        fare: 55,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7605, 121.0203] // Approximate location of Evergreen (Labas)
    },
    {
        start: "Kingstown 1",
        destination: "Evergreen (Loob)",
        fare: 75,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7612, 121.0197] // Approximate location of Evergreen (Loob)
    },
    {
        start: "Kingstown 1",
        destination: "Baumbong (Kanto)",
        fare: 30,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7580, 121.0175] // Approximate location of Baumbong (Kanto)
    },
    {
        start: "Kingstown 1",
        destination: "Simbahan Congress",
        fare: 35,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7563, 121.0158] // Approximate location of Simbahan Congress
    },
    {
        start: "Kingstown 1",
        destination: "Primemark Deparo",
        fare: 45,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7589, 121.0145] // Approximate location of Primemark Deparo
    },
    {
        start: "Kingstown 1",
        destination: "Kingstown 2",
        fare: 40,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7620, 121.0220] // Approximate location of Celina 3
    },

    {
        start: "Kingstown 1",
        destination: "Celina 3",
        fare: 40,
        startLatLng: [14.7550, 121.0250], // Approximate location of Kingstown 1
        destinationLatLng: [14.7620, 121.0220] // Approximate location of Celina 3
    },
    {
        start: "Kingstown 2",
        destination: "Depaoro FX Terminal",
        fare: 40,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7598, 121.0140] // Approximate location of Deparo FX Terminal
    },
    {
        start: "Kingstown 2",
        destination: "Almar",
        fare: 70,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7515, 121.0050] // Approximate location of Almar
    },
    {
        start: "Kingstown 2",
        destination: "Benedict School",
        fare: 33,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7583, 121.0125] // Approximate location of Benedict School
    },
    {
        start: "Kingstown 2",
        destination: "Simbahan Congress",
        fare: 30,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7563, 121.0158] // Approximate location of Simbahan Congress
    },
    {
        start: "Kingstown 2",
        destination: "Villa Luisa",
        fare: 40,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7592, 121.0225] // Approximate location of Villa Luisa
    },
    {
        start: "Kingstown 2",
        destination: "B.M.S. / Sofia",
        fare: 40,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7608, 121.0207] // Approximate location of B.M.S. / Sofia
    },
    {
        start: "Kingstown 2",
        destination: "Sports Complex",
        fare: 25,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7623, 121.0178] // Approximate location of Sports Complex
    },
    {
        start: "Kingstown 2",
        destination: "Science High School",
        fare: 35,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7615, 121.0185] // Approximate location of Science High School
    },
    {
        start: "Kingstown 2",
        destination: "Young Achievers",
        fare: 35,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7628, 121.0193] // Approximate location of Young Achievers
    },
    {
        start: "Kingstown 2",
        destination: "Bagumbong Elem. School",
        fare: 35,
        startLatLng: [14.7565, 121.0260], // Approximate location of Kingstown 2
        destinationLatLng: [14.7610, 121.0210] // Approximate location of Bagumbong Elem. School
    },


    {
        start: "Union Village",
        destination: "Bakalan (Labas)",
        fare: 30,
        startLatLng: [14.7578, 121.0305],
        destinationLatLng: [14.7589, 121.0248] // Approximate location of Bakalan
    },
    {
        start: "Union Village",
        destination: "Maharlika",
        fare: 45,
        startLatLng: [14.7578, 121.0305],
        destinationLatLng: [14.7612, 121.0275] // Approximate location of Maharlika
    },
    {
        start: "Union Village",
        destination: "Franvill",
        fare: 70,
        startLatLng: [14.7578, 121.0305],
        destinationLatLng: [14.7650, 121.0202] // Approximate location of Franvill
    },
    {
        start: "Union Village",
        destination: "Kingstown 2",
        fare: 33,
        startLatLng: [14.7578, 121.0305],
        destinationLatLng: [14.7565, 121.0260] // Approximate location of Kingstown 2
    },
    {
        start: "Union Village",
        destination: "Bagumbong High School",
        fare: 45,
        startLatLng: [14.7578, 121.0305],
        destinationLatLng: [14.7620, 121.0230] // Approximate location of Bagumbong High School
    },

    {
        start: "Senate Village",
        destination: "Almar",
        fare: 70,
        startLatLng: [14.7582, 121.0320], // Approximate location of Senate Village
        destinationLatLng: [14.7515, 121.0050] // Approximate location of Almar
    },
    {
        start: "Senate Village",
        destination: "Deparo FX Terminal",
        fare: 70,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7598, 121.0140] // Approximate location of Deparo FX Terminal
    },
    {
        start: "Senate Village",
        destination: "Franvill",
        fare: 70,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7650, 121.0202] // Approximate location of Franvill
    },
    {
        start: "Senate Village",
        destination: "Olympus",
        fare: 100,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7690, 121.0180] // Approximate location of Olympus
    },
    {
        start: "Senate Village",
        destination: "Kingstown 2",
        fare: 50,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7565, 121.0260] // Approximate location of Kingstown 2
    },
    {
        start: "Senate Village",
        destination: "Bagumbong High School",
        fare: 60,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7620, 121.0230] // Approximate location of Bagumbong High School
    },
    {
        start: "Senate Village",
        destination: "Bagumbong Center",
        fare: 60,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7605, 121.0252] // Approximate location of Bagumbong Center
    },
    {
        start: "Senate Village",
        destination: "Bagumbong (Kanto)",
        fare: 60,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7618, 121.0225] // Approximate location of Bagumbong Kanto
    },
    {
        start: "Senate Village",
        destination: "Young Achievers",
        fare: 50,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7628, 121.0193] // Approximate location of Young Achievers
    },
    {
        start: "Senate Village",
        destination: "Rainbow Ph. 3 (Bungad)",
        fare: 50,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7645, 121.0190] // Approximate location of Rainbow Phase 3 Bungad
    },
    {
        start: "Senate Village",
        destination: "Rainbow Ph. 3 (Dulo)",
        fare: 65,
        startLatLng: [14.7582, 121.0320],
        destinationLatLng: [14.7660, 121.0175] // Approximate location of Rainbow Phase 3 Dulo
    }



]
// Initialize Map
var map = L.map("map").setView([14.7458, 121.0333], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

let startMarker = null, endMarker = null, routeLine = null;

// Handle Map Clicks
map.on("click", function (e) {
    if (!startMarker) {
        startMarker = L.marker(e.latlng).addTo(map).bindPopup("Start Point").openPopup();
        document.getElementById("startLocation").value = `${e.latlng.lat}, ${e.latlng.lng}`;
        console.log(e.latlng)
    } else if (!endMarker) {
        endMarker = L.marker(e.latlng).addTo(map).bindPopup("End Point").openPopup();
        document.getElementById("endLocation").value = `${e.latlng.lat}, ${e.latlng.lng}`;
        getRoute(startMarker.getLatLng(), endMarker.getLatLng());
    } else {
        resetMarkers(e.latlng);
    }
});

function resetMarkers(latlng) {
    map.removeLayer(startMarker);
    map.removeLayer(endMarker);
    if (routeLine) map.removeLayer(routeLine);
    startMarker = L.marker(latlng).addTo(map).bindPopup("Start Point").openPopup();
    endMarker = null;
    document.getElementById("startLocation").value = `${latlng.lat}, ${latlng.lng}`;
    document.getElementById("endLocation").value = "";
}

// Fetch Suggestions (Fixed Fares + API)
let debounceTimer;
// function fetchSuggestions(query, type) {
//     if (query.length < 1) return clearSuggestions(type);

//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(() => {
//         const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5&bbox=120.98,14.65,121.05,14.75`;

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 const filteredData = data.features.filter(place => place.properties.name);

//                 let fixedMatches = [];

//                 fixedMatches = fixedFares
//                     .filter(fare =>
//                         fare.start.toLowerCase().includes(query.toLowerCase()) ||
//                         fare.destination.toLowerCase().includes(query.toLowerCase()) // Now checks both!
//                     )
//                     .map(fare => ({
//                         name: fare.start.toLowerCase().includes(query.toLowerCase()) ? fare.start : fare.destination,
//                         latlng: fare.start.toLowerCase().includes(query.toLowerCase()) ? fare.startLatLng : fare.destinationLatLng
//                     }));

//                 console.log("Fixed Matches:", fixedMatches); // Debugging

//                 const combinedResults = [...fixedMatches, ...filteredData.map(place => ({
//                     name: place.properties.name,
//                     latlng: [place.geometry.coordinates[1], place.geometry.coordinates[0]]
//                 }))];

//                 displaySuggestions(combinedResults, type);
//             })
//             .catch(error => console.error("Error fetching places:", error));
//     }, 300);
// }

function fetchSuggestions(query, type) {
    if (query.length < 1) return clearSuggestions(type);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5&bbox=120.98,14.65,121.05,14.75`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.features.filter(place => place.properties.name);

                let fixedMatches = [];

                fixedMatches = fixedFares
                    .filter(fare =>
                        fare.start.toLowerCase().startsWith(query.toLowerCase()) ||
                        fare.destination.toLowerCase().startsWith(query.toLowerCase())
                    )
                    .map(fare => ({
                        name: fare.start.toLowerCase().startsWith(query.toLowerCase()) ? fare.start : fare.destination,
                        latlng: fare.start.toLowerCase().startsWith(query.toLowerCase()) ? fare.startLatLng : fare.destinationLatLng
                    }));

                // Remove duplicate locations
                let uniqueSuggestions = new Map();
                fixedMatches.forEach(place => uniqueSuggestions.set(place.name, place));
                filteredData.forEach(place => {
                    const name = place.properties.name;
                    if (!uniqueSuggestions.has(name)) {
                        uniqueSuggestions.set(name, {
                            name,
                            latlng: [place.geometry.coordinates[1], place.geometry.coordinates[0]]
                        });
                    }
                });

                const combinedResults = Array.from(uniqueSuggestions.values());
                
                displaySuggestions(combinedResults, type);
            })
            .catch(error => console.error("Error fetching places:", error));
    }, 300);
}

function displaySuggestions(data, type) {
    let suggestionsList = type === "start" ? document.getElementById("startSuggestions") : document.getElementById("endSuggestions");
    suggestionsList.innerHTML = "";
    if (!data || data.length === 0) return clearSuggestions(type);

    let fragment = document.createDocumentFragment();
    data.forEach(place => {
        let li = document.createElement("li");
        li.textContent = place.name;
        li.classList.add("suggestion-item");
        li.onclick = () => selectLocation(place.latlng[0], place.latlng[1], place.name, type);
        fragment.appendChild(li);
    });

    suggestionsList.appendChild(fragment);
    suggestionsList.style.display = "block";
}

function clearSuggestions(type) {
    let suggestionsList = type === "start" ? document.getElementById("startSuggestions") : document.getElementById("endSuggestions");
    suggestionsList.innerHTML = "";
    suggestionsList.style.display = "none";
}

function selectLocation(lat, lng, name, type) {
    let selectedLatLng = [parseFloat(lat), parseFloat(lng)];
    let input = type === "start" ? "startLocation" : "endLocation";
    let suggestions = type === "start" ? "startSuggestions" : "endSuggestions";

    document.getElementById(input).value = name; // Ensure correct assignment
    clearSuggestions(type);

    if (type === "start") {
        if (startMarker) map.removeLayer(startMarker);
        startMarker = L.marker(selectedLatLng).addTo(map).bindPopup("Start Point: " + name).openPopup();
    } else {
        if (endMarker) map.removeLayer(endMarker);
        endMarker = L.marker(selectedLatLng).addTo(map).bindPopup("End Point: " + name).openPopup();
    }

    map.setView(selectedLatLng, 15);
}


// Calculate Fare on Button Click
document.getElementById("calculateFare").addEventListener("click", function () {
    if (!startMarker || !endMarker) {
        alert("Please select both start and end locations.");
        return;
    }
    getRoute(startMarker.getLatLng(), endMarker.getLatLng());
});

function getRoute(start, end) {
    const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&alternatives=false&steps=true`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.routes || data.routes.length === 0) throw new Error("No route found.");

            const coordinates = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
            if (routeLine) map.removeLayer(routeLine);
            routeLine = L.polyline(coordinates, { color: "blue" }).addTo(map);

            const distanceKm = data.routes[0].distance / 1000;
            document.getElementById("distance").innerText = distanceKm.toFixed(2) + " km";

            // Ensure start and destination names are fetched properly
            const startName = document.getElementById("startLocation").value.trim() || "Unknown Start";
            const destinationName = document.getElementById("endLocation").value.trim() || "Unknown Destination";

            // Debugging logs
            console.log("Selected Start:", startName);
            console.log("Selected Destination:", destinationName);

            // Calculate and display fare
            calculateFare(startName, destinationName, distanceKm);
        })
        .catch(error => {
            console.error("Error fetching route:", error);
            alert("Failed to fetch route. Try again.");
        });
}


function calculateFare(startName, destinationName, distance) {
    // Ensure values are properly formatted
    startName = startName.trim();
    destinationName = destinationName.trim();

    // Debugging logs
    console.log("Start Name:", startName);
    console.log("Destination Name:", destinationName);
    console.log("Distance:", distance);

    const fixedFare = fixedFares.find(
        fare => 
            (fare.start.toLowerCase() === startName.toLowerCase() && 
             fare.destination.toLowerCase() === destinationName.toLowerCase()) || 
            (fare.start.toLowerCase() === destinationName.toLowerCase() && 
             fare.destination.toLowerCase() === startName.toLowerCase()) // Vice versa check
    );

    let fare;
    if (fixedFare) {
        fare = fixedFare.fare; // Use fixed fare
    } else {
        // Ensure distance is a valid number
        distance = parseFloat(distance) || 0;

        const baseFare = 25; // Example base fare
        const perKmRate = 10; // Example rate per km
        fare = baseFare + (distance * perKmRate);
    }

    // Debugging logs
    console.log("Calculated Fare:", fare);

    // Update HTML with the fare
    document.getElementById("fareAmount").innerText = `₱${fare.toFixed(2)}`;
}

document.getElementById("startLocation").addEventListener("input", function () {
    fetchSuggestions(this.value, "start");
});

document.getElementById("endLocation").addEventListener("input", function () {
    fetchSuggestions(this.value, "end");
});
