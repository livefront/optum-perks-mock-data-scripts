const fs = require("fs");
const path = require("path");

const { response } = require("../src/conditionListByCategoryResponse");
const {
  getInteraction,
} = require("../src/responses/guest-visits/getInteraction");
const {
  postInteractionOne,
  postInteractionTwo,
} = require("../src/responses/guest-visits/postInteraction");
const { eligibility } = require("../src/responses/guest-visits/eligibility");
const {
  generateDetailsForAllConditions,
} = require("../src/responses/conditions/condition-legacy");
const jsonData = require("../src/mockoonFile.json");
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
  } else if (
    route.endpoint === "guest-visits/:visitId/interaction" &&
    route.method === "get"
  ) {
    route.responses[0].body = JSON.stringify(getInteraction, null, 2);
  } else if (
    route.endpoint === "guest-visits/:visitId/interaction" &&
    route.method === "post"
  ) {
    const responseThatLeadsToRegister = route.responses[0];
    const generalResponse = route.responses[1];
    if (responseThatLeadsToRegister.rules.length === 0) {
      responseThatLeadsToRegister.rules = [
        {
          target: "request_number",
          modifier: "",
          value: "2",
          invert: false,
          operator: "equals",
        },
      ];
    }
    responseThatLeadsToRegister.body = JSON.stringify(
      postInteractionTwo,
      null,
      2
    );
    generalResponse.body = JSON.stringify(postInteractionOne, null, 2);
    if (generalResponse.rules.length === 0) {
      generalResponse.rules = [
        {
          target: "request_number",
          modifier: "",
          value: "1",
          invert: false,
          operator: "equals",
        },
      ];
    }
  } else if (route.endpoint === "guest-visits/eligibility") {
    route.responses[0].body = JSON.stringify(eligibility, null, 2);
  } else if (route.endpoint === "guest-visits") {
    const currentHeaders = route.responses[0].headers;
    const sessionTokenExists = currentHeaders.find(
      (header) => header.key === "session-token"
    );
    const headersWithSessionToken = [
      ...currentHeaders,
      {
        key: "session-token",
        value: "12345678",
      },
    ];
    route.responses[0].headers = sessionTokenExists
      ? currentHeaders
      : headersWithSessionToken;
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
