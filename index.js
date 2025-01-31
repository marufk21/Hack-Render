import express from "express";
import axios from "axios";

const app = express();

const urls = [
  "https://hack-render.onrender.com",
  "https://streamtalk.onrender.com/",
  "https://vibesta.onrender.com/login",
  // Add more URLs as needed
];

const interval = 30000;

function reloadWebsites() {
  urls.forEach((url) => {
    axios
      .get(url)
      .then(() => {
        console.log(`Website reloaded: ${url}`);
      })
      .catch((error) => {
        console.error(`Error reloading ${url}: ${error.message}`);
      });
  });
}

setInterval(reloadWebsites, interval);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
