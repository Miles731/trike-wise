// POP UP MODAL STUDENT OR SENIOR USER
document.addEventListener("DOMContentLoaded", function () {
    var userTypeModal = new bootstrap.Modal(document.getElementById("userTypeModal"), { backdrop: 'static', keyboard: false });
    var confirmModal = new bootstrap.Modal(document.getElementById("confirmModal")); // Confirmation modal
    var videoModal = new bootstrap.Modal(document.getElementById("videoModal")); // Video modal

    userTypeModal.show();

    var studentImg = document.getElementById("studentImg");
    var seniorImg = document.getElementById("seniorImg");
    var watchYesBtn = document.getElementById("watchYes");
    var watchNoBtn = document.getElementById("watchNo");

    studentImg.addEventListener("click", function () {
        userTypeModal.hide();
    });

    seniorImg.addEventListener("click", function () {
        document.body.style.fontSize = "1.8em";
        document.querySelectorAll(".feature h3, .feature h5, .feature p, .feature span").forEach(function (element) {
            element.style.fontSize = ".8em";
        });
        userTypeModal.hide(); // Close the user type modal

        confirmModal.show(); // Show confirmation modal
    });

    // If the user clicks "Yes", show the tutorial modal
    watchYesBtn.addEventListener("click", function () {
        confirmModal.hide();
        videoModal.show();
    });

    // If the user clicks "No", just close the confirmation modal
    watchNoBtn.addEventListener("click", function () {
        confirmModal.hide();
    });

    // Stop video when tutorial modal closes
    document.getElementById("videoModal").addEventListener("hidden.bs.modal", function () {
        var tutorialVideo = document.getElementById("tutorialVideo");
        tutorialVideo.src = tutorialVideo.src;
    });
});

// STOP MODAL VIDEO WHEN CLOSED
document.addEventListener("DOMContentLoaded", function () {
    var videoModal = document.getElementById("videoModal");
    var tutorialVideo = document.getElementById("tutorialVideo");

    videoModal.addEventListener("hidden.bs.modal", function () {
        tutorialVideo.src = tutorialVideo.src; // Stop video when modal closes
    });
});

mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXM3MzEiLCJhIjoiY203cmtlbDVuMDUxZjJ4cGw0azJqYmo5MyJ9.6mnMZ8rwnnBM6FYQfqA6QQ';

// 🔹 Fixed Locations & Fares
const fixedLocations = [
    { name: "St. Joseph, Caloocan", center: [121.03454454498296, 14.74545533933184] },
    { name: "Saranay Road, Caloocan", center: [121.02659359996306, 14.755813591900235] },
    { name: "Barangay A, Caloocan", center: [121.025, 14.735] },
    { name: "Kingstown 1 (Labas)", center: [121.0281088967414, 14.749444701030157] },
    { name: "Kingstown 1 (Loob)", center: [121.02930086268418, 14.75041201319658] },
    { name: "Congress Taas", center: [121.03252096843244, 14.752216122665217] },
    { name: "Congress Baba Elementary", center: [121.03256074895398, 14.754437526201073] },
    { name: "Sta Cruz Labas", center: [121.03548692326541, 14.752887187829202] },
    { name: "Vicas/ Burger King", center: [121.0339205447604, 14.748256609054252] },
    { name: "Kingstown 2/ Queensville", center: [121.02357334251889, 14.75310181200389] },
    { name: "Kingstown 2", center: [121.02357334251889, 14.75310181200389] },
    { name: "Saranay Kanto", center: [121.02866534993359, 14.757486293840614] },
    { name: "High View", center: [121.03355676909024, 14.748615017639779] },
    { name: "Celerina", center: [121.03504316623258, 14.755012986019779] },
    { name: "Kingstown Enclaves", center: [121.02740488187146, 14.756463333518269] },
    { name: "Celina 3", center: [121.0253577684141, 14.75215685253616] },
    { name: "Senate 1", center: [121.03256918052358, 14.75850872538956] },
    { name: "Senate 2", center: [121.03295024754414, 14.761374350515553] },
    { name: "Princetown", center: [121.02374989016806, 14.75785355206628] },
    { name: "Kalikasan", center: [121.02909890851038, 14.75899273502651] },
    { name: "MBA/ Clamor Compound", center: [121.02760574555157, 14.75936317339496] },
    { name: "Bankers (Gate)", center: [121.02721658563138, 14.763134223327725] },
    { name: "Union Village", center: [121.0275877658787, 14.762045979125475] },
    { name: "Makisig", center: [121.0307146616608, 14.747936699404761] },
    { name: "BHS/ Sofia", center: [121.0277539331272, 14.747873474888038] },
    { name: "Manggahan", center: [121.0307146616608, 14.747936699404761] },
    { name: "UCC/ Science HS", center: [121.03112206373441, 14.75472349669721] },
    { name: "Sports Complex", center: [121.02036064571155, 14.750909860269488] },
    { name: "Citation", center: [121.02384811085415, 14.764594560400539] },
    { name: "Palmera 5/ Carrissa", center: [121.03142261996601, 14.76082424402611] },
    { name: "Puregold Deparo", center: [121.02380221326115, 14.741116535949999] },
    { name: "Franvill", center: [121.03680564374719, 14.76107774591756] },
    { name: "Villa Luisa", center: [121.01641563668471, 14.754976675195024] },
    { name: "Evergreen (Labas)", center: [121.01974934961709, 14.749368317753408] },
    { name: "Evergreen", center: [121.01974934961709, 14.749368317753408] },
    { name: "Evergreen (Loob)", center: [121.01876777462303, 14.749056241628026] },
    { name: "Bagumbong (Kanto)", center: [121.0210902788263, 14.747210099006708] },
    { name: "Simbahan Congress", center: [121.03246587745554, 14.75253621171261] },
    { name: "Primemark Deparo", center: [121.0265226600336, 14.739597203071384] },
    { name: "Deparo FX Terminal", center: [121.0243295510765, 14.740780314978693] },
    { name: "Almar", center: [121.04404818045373, 14.755585120243254] },
    { name: "Benedict School", center: [121.02735302731702, 14.760232440801545] },
    { name: "Young Achievers", center: [121.02110270767395, 14.747927956909976] },
    { name: "Bagumbong Elementary School", center: [121.02283912753398, 14.747783067052637] },
    { name: "Solar Homes", center: [121.0069157222996, 14.749881005240084] },
    { name: "Bakalan (Labas)", center: [121.03142261996601, 14.76082424402611] },
    { name: "Maharlika", center: [121.03142261996601, 14.76082424402611] },
    { name: "Olympus", center: [121.03956149684171, 14.744612848580005] },
    { name: "Bagumbong Center", center: [121.0307975565283, 14.748231120793271] },
    { name: "Rainbow PH.3 (Bungad)", center: [121.03092378750104, 14.740499354767238] },
    { name: "Rainbow PH.3 (Dulo)", center: [121.03104097885583, 14.742752795656976] },
    { name: "Irish Vill", center: [121.0195517175323, 14.760553029816307] },
    { name: "Gubat sa Ciudad", center: [121.01775185461878, 14.759212117846687] },
    { name: "Elisian Homes", center: [121.02124345271324, 14.770904542525699] },
    { name: "Heritage (Jeep Terminal)", center: [121.01845672197459, 14.77222757457065] },
    { name: "Bahay Pare (Flying V)", center: [121.00722086460604, 14.767405499201544] },
    { name: "Sto. Niño (Terminal)", center: [120.99665030688993, 14.767091354965487] },
    { name: "NPC Baba (Court)", center: [121.03079334155524, 14.747366492812546] },
    { name: "NPC Baba (Dulo)", center: [121.02851676965759, 14.745236867464783] },
    { name: "Dolmar 2", center: [121.0257367539867, 14.743701280902343] },
    { name: "La Consolacion School", center: [121.02711028005302, 14.744447045323973] },
    { name: "La Consolacion College", center: [121.02711028005302, 14.744447045323973] },
    { name: "Recom Ville Bungad", center: [121.02517610791645, 14.747335649583263] },
    { name: "Recom Ville PH. 2", center: [121.0216724932302, 14.744229191989799] },
    { name: "Villa Alicia", center: [121.02104693969558, 14.743128150082487] },
    { name: "Villa Edna", center: [121.02631252396651, 14.747130363997282] },
    { name: "Sampalok Bungad", center: [121.0206749385775, 14.744655792606613] },
    { name: "Sampalok Dulo", center: [121.0176079450579, 14.745406840172476] },
    { name: "Mirabella", center: [121.02089402861537, 14.748893127619475] },
    { name: "Princess Homes", center: [121.02054734202379, 14.748616041808134] },
    { name: "Karina Homes", center: [121.02030441357603, 14.749917299192859] },
    { name: "Park View", center: [121.01535897213682, 14.751725588583142] },
    { name: "Prado", center: [121.01384099097811, 14.75174577368423] },
    { name: "Tierra Nova (Labas)", center: [121.0100549687698, 14.751307401595536] },
    { name: "Tierra Nova (Loob)", center: [121.00888455585444, 14.7531399605142] },
    { name: "Tierra Nova PH. 2 & 3", center: [121.00528273790849, 14.74907538814648] },
    { name: "North Vill", center: [121.01274469078146, 14.750203440093248] },
    { name: "Villa Enrico (Bungad)", center: [121.01621744393924, 14.755126763596465] },
    { name: "Villa Enrico (Dulo)", center: [121.01541033368943, 14.754824726747046] },
    { name: "Monte Villa", center: [121.03142261996601, 14.76082424402611] },
    { name: "Novahills (Bungad)", center: [121.02546607266774, 14.762391220867984] },
    { name: "Bakalan (Loob)", center: [121.03142261996601, 14.76082424402611] },
    { name: "Congress (Baba)", center: [121.03192460373131, 14.754215984873769] },
    { name: "Palmera 3A", center: [121.03346740519129, 14.762323009558429] },
    { name: "Palmera 3B", center: [121.0349752626704, 14.760682041291133] },
    { name: "Palmera PH. 4", center: [121.03821018018442, 14.75988082741111] },
    { name: "Palmera PH. 1", center: [121.04007471992406, 14.754201069614979] },
    { name: "Bankers (Loob)", center: [121.0263953420576, 14.766852372515258] },
    { name: "Forest Park", center: [121.02642171687006, 14.767752083313638] },
    { name: "Sampaguita", center: [121.03270340564129, 14.769761982848589] },
    { name: "Shelter Vill", center: [121.03035985643814, 14.771931606588213] },
    { name: "Deca Homes Gate", center: [121.03142261996601, 14.76082424402611] }
];

const fixedFares = [
    { origin: "St. Joseph, Caloocan", destination: "Saranay Road, Caloocan", fare: 15 },
    { origin: "Poblacion, Caloocan", destination: "Barangay A, Caloocan", fare: 12 },
    { origin: "Bagong Silang, Caloocan", destination: "Barangay A, Caloocan", fare: 10 },
    { origin: "Kingstown 1 (Labas)", destination: "Barangay A, Caloocan", fare: 25 },
    { origin: "Vicas/Burger King", destination: "Kingstown 1 (Labas)", fare: 25 }, 
    { origin: "Vicas/Burger King", destination: "Kingstown 1 (Loob)", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Congress Taas", fare: 30 }, 
    { origin: "Vicas/Burger King", destination: "Congress Baba Elementary", fare: 25 }, 
    { origin: "Vicas/Burger King", destination: "Sta Cruz Labas", fare: 30 }, 
    { origin: "Vicas/Burger King", destination: "Kingstown 2/ Queensville", fare: 36 }, 
    { origin: "Vicas/Burger King", destination: "Saranay Kanto", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "High View", fare: 25 }, 
    { origin: "Vicas/Burger King", destination: "Divine", fare: 30 }, 
    { origin: "Vicas/Burger King", destination: "Celerina", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Kingstown Enclaves", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Celina 3", fare: 35 }, 
    { origin: "Vicas/Burger King", destination: "Senate 1", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Senate 2", fare: 40 }, 
    { origin: "Vicas/Burger King", destination: "Prince Town", fare: 35 }, 
    { origin: "Vicas/Burger King", destination: "Kalikasan", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "MBA/ Clamor Compound", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Bankers (Gate)", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Saranay", fare: 33 }, 
    { origin: "Vicas/Burger King", destination: "Union Village", fare: 35 }, 
    { origin: "Vicas/Burger King", destination: "Makisig", fare: 25 }, 
    { origin: "Vicas/Burger King", destination: "BHS/ Sofia", fare: 25 }, 
    { origin: "Vicas/Burger King", destination: "Manggahan", fare: 30 }, 
    { origin: "Vicas/Burger King", destination: "UCC/ Science HS", fare: 25 }, 
    { origin: "Vicas/Burger King", destination: "Sports Complex", fare: 45 }, 
    { origin: "Vicas/Burger King", destination: "Citation", fare: 60 }, 
    { origin: "Vicas/Burger King", destination: "Palmera 5/ Carrissa", fare: 40 }, 
    { origin: "Kingstown 1", destination: "Puregold Deparo", fare: 45 }, 
    { origin: "Kingstown 1", destination: "Franvill", fare: 70 }, 
    { origin: "Kingstown 1", destination: "Villa Luisa", fare: 55 }, 
    { origin: "Kingstown 1", destination: "Evergreen (Labas)", fare: 45 }, 
    { origin: "Kingstown 1", destination: "Evergreen (Loob)", fare: 55 }, 
    { origin: "Kingstown 1", destination: "Bagumbong (Kanto)", fare: 30 }, 
    { origin: "Kingstown 1", destination: "Simbahan Congress", fare: 30 }, 
    { origin: "Kingstown 1", destination: "Primemark Deparo", fare: 60 }, 
    { origin: "Kingstown 1", destination: "Kingstown 2", fare: 40 }, 
    { origin: "Kingstown 1", destination: "Celina 3", fare: 40 }, 
    { origin: "Kingstown 2", destination: "Deparo FX Terminal", fare: 40 },
    { origin: "Kingstown 2", destination: "Almar", fare: 70 },
    { origin: "Kingstown 2", destination: "St. Benedict School", fare: 33 },
    { origin: "Kingstown 2", destination: "Simbahan Congress", fare: 30 },
    { origin: "Kingstown 2", destination: "Villa Luisa", fare: 40 },
    { origin: "Kingstown 2", destination: "BHS/ Sophia", fare: 45 },
    { origin: "Kingstown 2", destination: "Sports Complex", fare: 25 },
    { origin: "Kingstown 2", destination: "UCC/ Science HS", fare: 30 },
    { origin: "Kingstown 2", destination: "Young Achievers", fare: 35 },
    { origin: "Kingstown 2", destination: "Bagumbong Elementary School", fare: 40 },
    { origin: "Kingstown 2", destination: "Solar Homes", fare: 50 },
    { origin: "Union Village", destination: "Bakalan (Labas)", fare: 35 },
    { origin: "Union Village", destination: "Maharlika", fare: 45 },
    { origin: "Union Village", destination: "Franvill", fare: 80 },
    { origin: "Union Village", destination: "Kingstown 2", fare: 33 },
    { origin: "Union Village", destination: "BHS/ Sofia", fare: 45 },
    { origin: "Senate Village", destination: "Almar", fare: 70 },
    { origin: "Senate Village", destination: "Deparo FX Terminal", fare: 70 },
    { origin: "Senate Village", destination: "Franvill", fare: 70 },
    { origin: "Senate Village", destination: "Olympus", fare: 100 },
    { origin: "Senate Village", destination: "Kingstown 2", fare: 50 },
    { origin: "Senate Village", destination: "BHS/ Sofia", fare: 40 },
    { origin: "Senate Village", destination: "Bagumbong Center", fare: 60 },
    { origin: "Senate Village", destination: "Bagumbong (Kanto)", fare: 60 },
    { origin: "Senate Village", destination: "Young Achievers", fare: 60 },
    { origin: "Senate Village", destination: "Rainbow PH.3 (Bungad)", fare: 30 },
    { origin: "Senate Village", destination: "Rainbow PH.3 (Dulo)", fare: 35 },
    { origin: "Vicas/ Burger King", destination: "Irish Vill", fare: 75 },
    { origin: "Vicas/ Burger King", destination: "Gubat sa Ciudad", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "Elisian Homes", fare: 80 },
    { origin: "Vicas/ Burger King", destination: "Heritage (Jeep Terminal)", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "Bahay Pare (Flying V)", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "Sto. Niño (Terminal) ", fare: 150 }, 
    { origin: "Vicas/ Burger King", destination: "NPC Baba (Court)", fare: 28 },
    { origin: "Vicas/ Burger King", destination: "NPC Baba (Dulo)", fare: 30 },
    { origin: "Vicas/ Burger King", destination: "Rainbow PH.3 (Bungad)", fare: 30 },
    { origin: "Vicas/ Burger King", destination: "Rainbow PH.3 (Dulo)", fare: 35 },
    { origin: "Vicas/ Burger King", destination: "Dolmar 2", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "La Consolacion College", fare: 40 },
    { origin: "Vicas/ Burger King", destination: "Puregold Deparo", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Deparo FX Terminal", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Recom Ville Bungad", fare: 35 },
    { origin: "Vicas/ Burger King", destination: "Recom Ville PH. 2", fare: 45 },
    { origin: "Vicas/ Burger King", destination: "Villa Alicia", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Villa Edna", fare: 30 },
    { origin: "Vicas/ Burger King", destination: "Bagumbong Center", fare: 40 },
    { origin: "Vicas/ Burger King", destination: "Bagumbong (Kanto)", fare: 40 },

    { origin: "Vicas/ Burger King", destination: "Solar Homes", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Sampalok Bungad", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Sampalok Dulo", fare: 60 },
    { origin: "Vicas/ Burger King", destination: "Young Achievers", fare: 40 },
    { origin: "Vicas/ Burger King", destination: "Mirabella", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Princess Homes", fare: 55 },
    { origin: "Vicas/ Burger King", destination: "Karina Homes", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Evergreen", fare: 60 },
    { origin: "Vicas/ Burger King", destination: "Villa Luisa", fare: 60 },
    { origin: "Vicas/ Burger King", destination: "Park View", fare: 70 },
    { origin: "Vicas/ Burger King", destination: "Prado", fare: 80 },
    { origin: "Vicas/ Burger King", destination: "Tierra Nova (Labas)", fare: 80 },
    { origin: "Vicas/ Burger King", destination: "Tierra Nova (Loob)", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "Tierra Nova PH. 2 & 3", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "North Vill", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "Villa Enrico (Bungad)", fare: 80 },

    { origin: "Vicas/ Burger King", destination: "Villa Enrico (Dulo)", fare: 100 },
    { origin: "Vicas/ Burger King", destination: "Monte Villa", fare: 35 },
    { origin: "Vicas/ Burger King", destination: "Novahills (Bungad)", fare: 45 },
    { origin: "Vicas/ Burger King", destination: "Bakalan (Labas)", fare: 60 },
    { origin: "Vicas/ Burger King", destination: "Bakalan (Loob)", fare: 70 },
    { origin: "Vicas/ Burger King", destination: "Congress (Baba)", fare: 30 },
    { origin: "Vicas/ Burger King", destination: "Palmera 3A", fare: 45 },
    { origin: "Vicas/ Burger King", destination: "Palmera 3B", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Palmera PH. 4", fare: 60 },
    { origin: "Vicas/ Burger King", destination: "Palmera PH. 1", fare: 70 },
    { origin: "Vicas/ Burger King", destination: "Bankers (Loob)", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Forest Park", fare: 50 },
    { origin: "Vicas/ Burger King", destination: "Sampaguita", fare: 90 },
    { origin: "Vicas/ Burger King", destination: "Shelter Vill", fare: 110 },
    { origin: "Vicas/ Burger King", destination: "Deca Homes Gate", fare: 120 }
]

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
function normalizeLocation(location) {
    return location
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ""); // Remove all spaces
}

function getFixedFare(origin, destination) {
    origin = normalizeLocation(origin);
    destination = normalizeLocation(destination);

    console.log("Checking fare for:", origin, "→", destination); // Debugging

    const fareEntry = fixedFares.find(route => {
        const routeOrigin = normalizeLocation(route.origin);
        const routeDestination = normalizeLocation(route.destination);

        return (
            (routeOrigin === origin && routeDestination === destination) ||
            (routeOrigin === destination && routeDestination === origin) // Check both ways
        );
    });

    console.log("Fare found:", fareEntry ? fareEntry.fare : "None"); // Debugging

    return fareEntry ? fareEntry.fare : null;
}


// Map Click Event
map.on("click", function (e) {
    const clickedCoords = e.lngLat;

    // Define Caloocan's bounding box (approximate)
    const caloocanBounds = {
        minLat: 14.721, // South
        maxLat: 14.783, // North
        minLng: 120.986, // West
        maxLng: 121.057  // East
    };

    // Check if the clicked location is outside Caloocan
    if (
        clickedCoords.lat < caloocanBounds.minLat || clickedCoords.lat > caloocanBounds.maxLat ||
        clickedCoords.lng < caloocanBounds.minLng || clickedCoords.lng > caloocanBounds.maxLng
    ) {
        // Show Bootstrap modal
        var modal = new bootstrap.Modal(document.getElementById('outsideCaloocanModal'));
        modal.show();
        return; // Stop execution
    }

    // If inside Caloocan, set the marker (Start or End)
    if (!startMarker) {
        startMarker = new mapboxgl.Marker({ color: "blue" })
            .setLngLat(clickedCoords)
            .setPopup(new mapboxgl.Popup().setText("Start Point"))
            .addTo(map);
       
    } else if (!endMarker) {
        endMarker = new mapboxgl.Marker({ color: "red" })
            .setLngLat(clickedCoords)
            .setPopup(new mapboxgl.Popup().setText("End Point"))
            .addTo(map);
       

        if (startMarker) getRoute(startMarker.getLngLat(), endMarker.getLngLat());
    } else {
        // If both markers exist, reset the markers
        startMarker.remove();
        endMarker.remove();
        startMarker = null;
        endMarker = null;
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

            suggestions = [...suggestions, ...mapboxResults].slice(0, 5);

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
        startMarker = new mapboxgl.Marker({ color: "blue" }) 
            .setLngLat(coords)
            .setPopup(new mapboxgl.Popup().setText("Start Point"))
            .addTo(map);
        document.getElementById("startLocation").value = place.name;
    } else if (type === "end") {
        if (endMarker) endMarker.remove();
        endMarker = new mapboxgl.Marker({ color: "red" }) 
            .setLngLat(coords)
            .setPopup(new mapboxgl.Popup().setText("End Point"))
            .addTo(map);
        document.getElementById("endLocation").value = place.name;

        //if (startMarker) getRoute(startMarker.getLngLat(), endMarker.getLngLat());
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
    document.getElementById("startLocation").value = "";
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

            // Get start and end location names
            const startLocationName = document.getElementById("startLocation").value.trim();
            const endLocationName = document.getElementById("endLocation").value.trim();
            
            // Check for fixed fare
            const fixedFare = getFixedFare(startLocationName, endLocationName);
            
            // Get distance in KM
            const distanceKm = data.routes[0].distance / 1000;
            document.getElementById("distance").innerText = `${distanceKm.toFixed(2)} km`;

            if (fixedFare !== null) {
                // If fixed fare exists, display it and set estimated fare to ₱0.00
                document.getElementById("fareAmount").innerText = `${fixedFare.toFixed(2)}`;
                document.getElementById("fare").innerText = `0.00`; // Estimated fare is zero
            } else {
                // Otherwise, calculate estimated fare
                const baseFare = 15; // Minimum fare
                const perKmRate = 5; // Adjusted per-km rate
            
                let estimatedFare = baseFare + (distanceKm * perKmRate);

                const fare = estimatedFare;
                document.getElementById("fareAmount").innerText = "₱0.00";
                document.getElementById("fare").innerText = `${fare.toFixed(2)}`;
            }
        })
        .catch(error => alert("Failed to fetch route. Try again."));
}



map.on("load", function () {
    addFixedLocationMarkers();
});






document.getElementById("reportIncident").addEventListener("click", function () {
    $("#incidentModal").modal("show");
  });

  document.getElementById("calculateFare").addEventListener("click", function () {
    if (!startMarker || !endMarker) {
        alert("Please select both a start and end location first.");
        return;
    }

    getRoute(startMarker.getLngLat(), endMarker.getLngLat());
});

document.getElementById("incidentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide form and show thank you message
    document.getElementById("incidentForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Send form data to FormSubmit
    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    });
});

$(document).ready(function () {
    $('#videoModal').on('hidden.bs.modal', function () {
        let $iframe = $('#tutorialVideo');
        let src = $iframe.attr('src');  // Get current src
        $iframe.attr('src', '');  // Empty src to stop the video
        $iframe.attr('src', src);  // Restore src to reset the video
    });
});