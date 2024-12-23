# Weather App

A simple weather application built using **Node.js**, **Express**, and **Bootstrap**. This app fetches weather data from the **OpenWeatherMap API** based on user input and displays the results in a styled, dynamic web page.

## Features

- **City-based Weather Search:** Users can enter a city name to get weather information.
- **Unit Selection:** Supports three measurement units - Metric (Celsius), Imperial (Fahrenheit), and Standard (Kelvin).
- **Weather Details:** Displays temperature, weather description, wind speed, and an icon representing the weather condition.
- **Bootstrap Styling:** Provides a clean and responsive UI.
- **Dynamic Content Rendering:** Renders weather details in a visually appealing card layout.

---

## Project Structure

- **app.js:** The main server-side script handling HTTP requests and responses.
- **index.html:** The client-side HTML file containing the input form and styled with Bootstrap.
- **Dependencies:** Utilizes `express` for routing, `https` for API requests, and `body-parser` for form data parsing.

---

## How It Works

1. **User Input:**
   - Users input a city name and select a unit of measurement (Metric, Imperial, or Standard).

2. **Form Submission:**
   - The form sends a POST request to the server.

3. **API Request:**
   - The server makes a GET request to the OpenWeatherMap API using the city name and unit provided by the user.

4. **Response Handling:**
   - The server processes the API response, extracting weather details like temperature, description, wind speed, and the weather icon.

5. **Display:**
   - Constructs an HTML page with the retrieved weather data and sends it back to the browser for display.

---

## Dependencies

- **express:** Simplifies server routing and request handling.
- **https:** Handles API requests to the OpenWeatherMap service.
- **body-parser:** Parses incoming form data for server-side use.

---

## Installation and Usage

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Replace the placeholder `appid` in `app.js` with your OpenWeatherMap API key:
   ```javascript
   const appid = '<your_api_key_here>';
   ```

5. Start the server:
   ```bash
   node app.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Example

1. Enter `London` as the city name.
2. Select the `Metric` unit.
3. Click "Submit" to see the temperature, weather description, and wind speed for London in Celsius.

---

## API Used

- **OpenWeatherMap API:** Provides the weather data for the application.
  - [API Documentation](https://openweathermap.org/api)

---
