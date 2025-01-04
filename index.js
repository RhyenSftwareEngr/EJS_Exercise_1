import express from "express"; // Import from express

const app = express(); // Initialize an Express app
const port = 3000; // define port number

// Start the server and listen on the specified port
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
