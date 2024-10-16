const fs = require("fs");
const path = require("path");

const { response } = require("../src/conditionListByCategoryResponse");
const {
  generateDetailsForAllConditions,
} = require("../src/responses/conditions/condition-legacy");
const jsonData = require("../src/mockoonFile.json");
const { toCamelCase } = require("../src/utils/toCamelCase");
const {
  toExpressDynamicEndpoint,
} = require("../src/utils/toExpressDynamicEndpoint");

const detailsForAllConditions = generateDetailsForAllConditions();
const conditionDetailsOutputPath = (conditionName) =>
  path.join(
    __dirname,
    `../src/generated-json/detailsForConditions/${conditionName}.json`
  );
detailsForAllConditions.forEach((conditionDetail) => {
  const fileName = toCamelCase(conditionDetail.conditionDetails.name, " ");
  const conditionOutputPath = conditionDetailsOutputPath(fileName);
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
jsonData.routes.forEach((route) => {
  if (route.endpoint.includes("{")) {
    route.endpoint = toExpressDynamicEndpoint(route.endpoint);
  }
  if (route.endpoint === "conditions") {
    route.responses[0].body = JSON.stringify(response, null, 2);
  } else if (route.endpoint === "conditions/:conditionLegacy") {
    route.responses[0].body = "";
    route.responses[0].bodyType = "FILE";
    route.responses[0].filePath =
      "./generated-json/detailsForConditions/{{urlParam 'conditionLegacy'}}.json";
  }
});

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
