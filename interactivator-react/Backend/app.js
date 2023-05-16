const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
  console.log(1000);
});
app.post("/api", (req, res) => {
  console.log("writing data");
  const newData = JSON.stringify(req.body.data);
  fs.writeFile("../src/logs.json", newData, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});
const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// fetch(`http://localhost:${configuration.port}/visitors`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     email: email,
//     password: password,
//   }),
// })
