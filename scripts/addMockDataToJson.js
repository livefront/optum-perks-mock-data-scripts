const fs = require("fs");
const path = require("path");
const jsonData = require("../src/mockoon_env.final.json");
const { updateAllRoutes } = require("../src/route-transforms/updateAllRoutes");

// Generate JSON files for spec compliant condition details
require("child_process").fork("./scripts/generateMockConditionFiles.js");

// Update the data in the JSON file to use the mock data and syntax we need
updateAllRoutes();

// Specify the path to the output JSON file that will be given to Mockoon
const outputPath = path.join(__dirname, "../src/mockoon_env.final.json");

// Write the modified object to the output path
fs.writeFile(outputPath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file has been saved:", outputPath);
  }
});
