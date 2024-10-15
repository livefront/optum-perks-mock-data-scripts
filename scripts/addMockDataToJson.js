const fs = require("fs");
const path = require("path");

const { response } = require("../src/conditionListByCategoryResponse");
const jsonData = require("../src/mockoonFile.json");

// Specify the path to the output JSON file
const outputPath = path.join(__dirname, "../src/mockoonFile.json");

jsonData.routes.forEach((route) => {
  if (route.endpoint === "conditions") {
    route.responses[0].body = JSON.stringify(response, null, 2);
  }
});

// Write the object to a JSON file
fs.writeFile(outputPath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file has been saved:", outputPath);
  }
});
