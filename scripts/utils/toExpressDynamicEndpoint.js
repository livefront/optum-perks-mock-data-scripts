const { toCamelCase } = require("./toCamelCase");

function toExpressDynamicEndpoint(endpoint) {
  return endpoint.replace(/{([^}]+)}/, (match, endpointWithoutBrackets) => {
    // Process the content within the braces
    return ":" + toCamelCase(endpointWithoutBrackets, "-"); // Join back into a string
  });
}

module.exports = { toExpressDynamicEndpoint };
