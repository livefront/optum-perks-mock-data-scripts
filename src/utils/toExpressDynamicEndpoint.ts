import { toCamelCase } from "./toCamelCase";

export function toExpressDynamicEndpoint(endpoint: string) {
  return endpoint.replace(/{([^}]+)}/g, (match, endpointWithoutBrackets) => {
    // Add the colon and make the endpoint camel case
    return ":" + toCamelCase(endpointWithoutBrackets, "-");
  });
}
