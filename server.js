const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const fileUpload = require("express-fileupload");

// initialize express server
const app = express();

// use fileupload
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("that tickles");
});

// upload endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }

  const file = req.files.file;
  res.json({ fileName: file.name });
});

app.listen(5000);
