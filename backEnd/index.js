const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/User.js");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(
    cors({
        origin: "*",
    })
);

// middleware
app.use(express.json());
app.use("/api/v1", userRoutes);

// cors configuration
app.listen(PORT, () => {
    console.log(`The server is UP and RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>BackEnd is Running</h1>`);
});