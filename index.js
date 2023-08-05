const database = require("./config/database");
database.connect();
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const route = require("./routing");
const path = require("path");
const cors = require('cors');

app.use(express.static(path.resolve(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", route);
app.listen(process.env.PORT || 4000, "0.0.0.0", () => {
    console.log("server running");
});
