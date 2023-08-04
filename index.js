const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const route = require("./routing");
const path = require("path");
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", route);
app.listen(process.env.PORT || 4000, "0.0.0.0", () => {
  console.log("server running");
});
