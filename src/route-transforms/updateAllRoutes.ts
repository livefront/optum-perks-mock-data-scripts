import mockServerData from "../mockoonFile.json";
import { eligibility } from "../responses/guest-visits/eligibility";
import { getInteraction } from "../responses/guest-visits/getInteraction";
import {
  postInteractionOne,
  postInteractionTwo,
} from "../responses/guest-visits/postInteraction";
import { toExpressDynamicEndpoint } from "../utils/toExpressDynamicEndpoint";
import { addMockDataToConditions } from "./add-mock-data-to-route/conditions";

export const updateAllRoutes = () => {
  mockServerData.routes.forEach((route) => {
    if (route.endpoint.includes("{")) {
      route.endpoint = toExpressDynamicEndpoint(route.endpoint);
    }
    if (route.endpoint === "conditions") {
      addMockDataToConditions(route);
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
};
