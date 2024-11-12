const fs = require("fs");
const path = require("path");
const jsonData = require("../src/mockoon_env.final.json");

// Process each route in the environment data
jsonData.routes.forEach((route) => {
  let endpoint = route.endpoint; // e.g. conditions/labels/{condition-label}

  // Replace hyphens between curly braces with underscores and format for Express-style routes
  endpoint = endpoint
    .replace(/\{([^}]*)-([^}]*)\}/g, (_, p1, p2) => `{${p1}_${p2}}`)
    .replace(/\{/g, ":")
    .replace(/\}/g, "");

  route.endpoint = endpoint;
  console.log(`Processing endpoint: ${endpoint}`);

  // Extract path parameters (parts starting with ':')
  const pathParams = endpoint
    .split("/")
    .filter((part) => part.startsWith(":"));
  console.log(`Found path params: ${pathParams}`);

  pathParams.forEach((param) => {
    console.log(`Adding rules for param: ${param}`);

    route.responses.forEach((response) => {
      const status = response.statusCode;
      const label = response.label;

      // Add the rule to match path parameter to response label
      response.rules.push({
        target: "params",
        modifier: param.replace(":", ""),
        operator: "equals",
        value: label,
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