let map;

function initializeMap(lat, lng) {
  const mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 15,
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}

function findAirPumps() {
  const postalCode = document.getElementById("postalCode").value;
  initializeMap(40.73061, -73.935242);

  fetch("/locations")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((location) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(
            location.geoLocation.lat,
            location.geoLocation.lng
          ),
          map: map,
          title: location.label,
        });
      });
    });
}

function addPump() {
  const formData = new FormData(document.getElementById("addPumpForm"));
  const requestData = {
    label: formData.get("line1"),
    geoLocation: {
      lat: 40.73061,
      lng: -73.935242,
    },
    streetAddress: {
      line1: formData.get("line1"),
      line2: formData.get("line2"),
      city: formData.get("city"),
      state: formData.get("state"),
      postal: formData.get("postal"),
    },
    comments: formData.get("comments"),
  };

  fetch("/location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  }).then((response) => {
    if (response.ok) {
      alert("Pump added successfully!");
    } else {
      alert("Error adding pump.");
    }
  });
}
