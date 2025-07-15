# 🏃‍♂️ Smart Jogger Web App

A real-time GPS-based jogging tracker built using modern Web APIs. This interactive web app helps joggers visualize their running path on a live map, track their coordinates, and monitor their network connection.

---

## 📸 Live Demo Screenshot

> ![Smart Jogger App Preview]<img src="assets/Home.png" alt="" width="200"/>


---

## ✨ Features

| Feature                                 | Description                                                                                                        |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ✅ **Real-time GPS tracking**            | Click **Start Jog** and the app will begin capturing your live location using the Geolocation API.                 |
| ✅ **Map visualization with Leaflet.js** | The map centers on your current position using tiles from OpenStreetMap.                                           |
| ✅ **Route drawing with polyline**       | As you move, a **black line (like a jogging road)** follows your trail in real-time.                               |
| ✅ **Animated marker**                   | A red circle moves along the drawn path to represent your movement.                                                |
| ✅ **Canvas coordinate display**         | The canvas at the bottom dynamically shows your latitude and longitude in real time.                               |
| ✅ **Network status checker**            | Below the canvas, it displays your internet connection type and speed using the Network Information API.           |
| ✅ **Responsive UI**                     | Works well on both desktop and mobile devices. Resize the window or open on your phone to see the adaptive design. |

---

## 🛠️ Technologies Used

* HTML, CSS, JavaScript
* [Leaflet.js](https://leafletjs.com/) for map rendering
* [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for coordinate display
* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to track position
* [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) to display network status

---

## 🚀 How to Run the Project Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/smart-jogger.git
   cd smart-jogger
   ```

2. Open the project in VS Code or any code editor.

3. Start a local server:

   * If using VS Code, right-click on `index.html` → **Open with Live Server**
   * OR using Python:

     ```bash
     python -m http.server
     ```
   * Then open `http://localhost:8000` or `http://127.0.0.1:5500`

4. Allow location access when prompted.

---

## 📂 Project Structure

```
smart-jogger/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── app.js              # App logic (JS)
├── assets/
│   ├── jogger-cartoon.png (optional)
│   └── demo-preview.png
```

---

## 📊 Example Results

* After clicking **Start Jog**:

  * 📍 The map zooms to your position
  * 🛣️ A black line follows where you walk or jog
  * 🔴 A red dot shows your current moving location
  * 🧭 Coordinates are shown in the canvas box
  * 🌐 Network info is shown below (e.g., "4g, 3.2 Mbps")

> ✅ All features tested and verified live.

---

## 📸 Screenshots

### ✅ Route Drawing with Polyline

![route](assets/route-drawing.png)

### ✅ Canvas Coordinate Display

![canvas](assets/canvas-display.png)

### ✅ Network Status API

![network](assets/network-status.png)

---

## 📬 Feedback

If you like this project or have suggestions, feel free to open an issue or fork it. Contributions welcome!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### 🚀 Deploy it live using GitHub Pages!

Go to **Settings → Pages → Source → `main` branch → `/root`** → Save → Visit the generated GitHub Pages URL.
