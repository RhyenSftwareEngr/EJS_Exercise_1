import express from "express"; // Import from express

const app = express(); // Initialize an Express app
const port = 3000; // define port number

app.get("/", (req, res) => {
  res.render("index.ejs", {
    daytype: "A weekday",
    advice: "it's time to work hard",
  });
});

// Start the server and listen on the specified port
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
