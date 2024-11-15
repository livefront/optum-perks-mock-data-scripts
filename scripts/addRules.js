const fs = require("fs");
const path = require("path");
const jsonData = require("../src/mockoon_env.final.json");

jsonData.routes.forEach((route) => {
  console.log(`Processing endpoint: ${route.endpoint}`);

  // Extract path parameters (parts starting with ':')
  const pathParams = route.endpoint
    .split("/")
    .filter((part) => part.startsWith(":"));
  console.log(`Found path params: ${pathParams}`);

  pathParams.forEach((param) => {
    console.log(`Adding rules for param: ${param}`);

    route.responses.forEach((response) => {
      // Add the rule to match path parameter to response label
      response.rules.push({
        target: "params",
        modifier: param.replace(":", ""),
        operator: "equals",
        value: response.label,
        invert: false,
      });
    });
  });
});

// Specify the path to the output JSON file
const outputPath = path.join(__dirname, "../src/mockoon_env.final.json");

// Write the modified object to the output path
fs.writeFile(outputPath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file has been saved:", outputPath);
  }
});
