const fs = require("fs");
const path = require("path");

const {
  generateDetailsForAllConditions,
} = require("../src/responses/conditions/condition-legacy");
const jsonData = require("../src/mockoonFile.json");
const { updateAllRoutes } = require("../src/route-transforms/updateAllRoutes");

const detailsForAllConditions = generateDetailsForAllConditions();
const conditionDetailsOutputPath = (conditionName) =>
  path.join(
    __dirname,
    `../src/generated-json/detailsForConditions/${conditionName}.json`
  );
detailsForAllConditions.forEach((conditionDetail) => {
  const conditionOutputPath = conditionDetailsOutputPath(
    conditionDetail.conditionDetails.urlSlug
  );
  fs.writeFile(
    conditionOutputPath,
    JSON.stringify(conditionDetail, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log("JSON file has been saved:", conditionOutputPath);
      }
    }
  );
});

// Update the data in the JSON file to use the mock data and syntax we need
updateAllRoutes();

// Specify the path to the output JSON file that will be given to Mockoon
const outputPath = path.join(__dirname, "../src/mockoonFile.json");

// Write the modified object to the output path
fs.writeFile(outputPath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file has been saved:", outputPath);
  }
});
