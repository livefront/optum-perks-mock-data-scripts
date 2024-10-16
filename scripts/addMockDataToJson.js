const fs = require("fs");
const path = require("path");

const { response } = require("../src/conditionListByCategoryResponse");
const {
  generateDetailsForAllConditions,
} = require("../src/responses/conditions/condition-legacy");
const jsonData = require("../src/mockoonFile.json");
const { toCamelCase } = require("./utils/toCamelCase");

// Specify the path to the output JSON file
const outputPath = path.join(__dirname, "../src/mockoonFile.json");

const detailsForAllConditions = generateDetailsForAllConditions();
const conditionDetailsOutputPath = (conditionName) =>
  path.join(
    __dirname,
    `../src/generated-json/detailsForConditions/${conditionName}.json`
  );
detailsForAllConditions.forEach((conditionDetail) => {
  const fileName = toCamelCase(conditionDetail.conditionDetails.name);
  fs.writeFile(
    conditionDetailsOutputPath(fileName),
    JSON.stringify(conditionDetail, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log("JSON file has been saved:", outputPath);
      }
    }
  );
});

jsonData.routes.forEach((route) => {
  if (route.endpoint === "conditions") {
    route.responses[0].body = JSON.stringify(response, null, 2);
  } else if (route.endpoint === "conditions/:conditionLegacy") {
    route.responses[0].body = "";
    route.responses[0].bodyType = "FILE";
    route.responses[0].filePath =
      "./generated-json/detailsForConditions/{{urlParam 'conditionLegacy'}}.json";
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
