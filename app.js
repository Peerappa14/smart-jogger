// app.js

let map = L.map('map').setView([0, 0], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let watchID;
let marker;
let pathCoords = [];
let polyline;

const canvas = document.getElementById("statsCanvas");
const ctx = canvas.getContext("2d");
const netStatus = document.getElementById("networkStatus");

function startJog() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  watchID = navigator.geolocation.watchPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      console.log("Lat:", lat, "Lng:", lng);

      drawStats(lat, lng);
      map.setView([lat, lng], 16);

      if (!marker) {
        marker = L.marker([lat, lng]).addTo(map);
      } else {
        marker.setLatLng([lat, lng]);
      }

      pathCoords.push([lat, lng]);

      if (polyline) {
        polyline.addLatLng([lat, lng]);
      } else {
        polyline = L.polyline([[lat, lng]], {
          color: 'black',
          weight: 6,
          opacity: 0.8,
          lineCap: 'round'
        }).addTo(map);
      }
    },
    (err) => {
      console.error("📍 GPS error code:", err.code, "Message:", err.message);
      alert("⚠️ Location access failed: " + err.message);
    },
    { enableHighAccuracy: true }
  );
}

function stopJog() {
  if (watchID) {
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
    alert("Jogging stopped.");
  }
}

function drawStats(lat, lng) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "18px Arial";
  ctx.fillStyle = "#00796b";
  ctx.fillText(`Latitude: ${lat.toFixed(5)}`, 20, 40);
  ctx.fillText(`Longitude: ${lng.toFixed(5)}`, 20, 80);
}

function updateNetworkStatus() {
  if ('connection' in navigator) {
    const conn = navigator.connection;
    let msg = `Network: ${conn.effectiveType}, Downlink: ${conn.downlink} Mbps`;
    netStatus.style.color = conn.downlink < 1 ? "red" : "green";
    msg += conn.downlink < 1 ? " ⚠️ Weak connection!" : "";
    netStatus.textContent = msg;
  } else {
    netStatus.textContent = "Network Information API not supported.";
  }
}

updateNetworkStatus();
if ('connection' in navigator) {
  navigator.connection.addEventListener('change', updateNetworkStatus);
}
