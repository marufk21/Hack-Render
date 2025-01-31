# Hack-Render (Keep-Alive Service)

This project provides a simple solution to prevent free-tier services like Render from putting your website into sleep mode due to inactivity. It periodically sends HTTP GET requests to your website, ensuring it stays active.

## Features
- Periodically sends requests to multiple URLs.
- Keeps your web applications active and prevents them from going idle.
- Simple and lightweight solution using Node.js, Express, and Axios.

## Requirements
- Node.js (v14+ recommended)
- Express
- Axios

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/website-keep-alive.git
   cd website-keep-alive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the `urls` array with the URLs you want to keep alive in the `index.js` file:
   ```javascript
   const urls = [
     "https://your-website-url.com",
     "https://another-url.com"
   ];
   ```

4. Run the server:
   ```bash
   npm start
   ```

   The server will start on port `4000` and will keep sending requests to the provided URLs every 30 seconds.

## How It Works
This project uses `axios` to send HTTP GET requests to a list of URLs. It uses `setInterval` to execute this action every 30 seconds, preventing the server from going idle on free-tier platforms like Render.

## Disclaimer
This project is not intended to bypass any service limitations maliciously. Always check the platform's terms of service before using such methods to ensure compliance with their policies.

## License
This project is open-source and available under the [MIT License](LICENSE).
