import mockServerData from "../mockoonFile.json";
import { toExpressDynamicEndpoint } from "../utils/toExpressDynamicEndpoint";
import { addMockDataToCondition } from "./add-mock-data-to-route/conditionLegacy";
import { addMockDataToConditions } from "./add-mock-data-to-route/conditions";
import { addMockDataGetGuestVisitInteraction } from "./add-mock-data-to-route/getGuestVisitInteraction";
import { addMockDataGuestVisitEligibility } from "./add-mock-data-to-route/guestVisitEligibility";
import { addMockDataGuestVisits } from "./add-mock-data-to-route/guestVisits";
import { addMockDataPostGuestVisitInteraction } from "./add-mock-data-to-route/postGuestVisitInteraction";

export const updateAllRoutes = () => {
  mockServerData.routes.forEach((route) => {
    if (route.endpoint.includes("{")) {
      route.endpoint = toExpressDynamicEndpoint(route.endpoint);
    }
    if (route.endpoint === "conditions") {
      addMockDataToConditions(route);
    } else if (route.endpoint === "conditions/:conditionLegacy") {
      addMockDataToCondition(route);
    } else if (
      route.endpoint === "guest-visits/:visitId/interaction" &&
      route.method === "get"
    ) {
      addMockDataGetGuestVisitInteraction(route);
    } else if (
      route.endpoint === "guest-visits/:visitId/interaction" &&
      route.method === "post"
    ) {
      addMockDataPostGuestVisitInteraction(route);
    } else if (route.endpoint === "guest-visits/eligibility") {
      addMockDataGuestVisitEligibility(route);
    } else if (route.endpoint === "guest-visits") {
      addMockDataGuestVisits(route);
    }
  });
};
