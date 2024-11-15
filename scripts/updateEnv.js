const fs = require("fs");
const path = require("path");
const jsonData = require("../src/mockoon_env.final.json");

// Update the port number
jsonData.port = 3005;

// Specify the output path
const outputPath = path.join(__dirname, "../src/mockoon_env.final.json");

// Write the modified configuration back to file
fs.writeFile(outputPath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("Port updated to 3005 and saved to:", outputPath);
  }
});
x