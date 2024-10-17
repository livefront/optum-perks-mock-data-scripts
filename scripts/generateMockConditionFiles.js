const fs = require("fs");
const path = require("path");

const {
  generateDetailsForAllConditions,
} = require("../src/responses/conditions/condition-legacy");

// Generate condition details objects that conform to the spec using the condition names in `mock-data/conditions`
const detailsForAllConditions = generateDetailsForAllConditions();

// Set output path for the condition details files
const conditionDetailsOutputPath = (conditionName) =>
  path.join(
    __dirname,
    `../src/generated-json/detailsForConditions/${conditionName}.json`
  );

// Write each condition detail object to its own JSON file in `/generated-json/detailsForConditions`
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
