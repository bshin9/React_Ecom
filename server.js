require("dotenv").config();
const express = require("express");
const PORT = 8000;
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

// Helmet will set various HTTP headers to help protect your app
// Morgan logs through the terminal whenever an event is triggered
app.use(helmet(), morgan("tiny"));

const port = process.env.PORT || 8000;
let uri = "";

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI; // connection string for Atlas here
} else {
  uri = process.env.ATLAS_URI; // connection string for localhost mongo here
}

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
