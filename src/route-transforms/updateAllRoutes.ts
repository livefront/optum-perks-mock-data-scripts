<<<<<<< HEAD
import mockServerData from "../mockoon_env.final.json";
import { setAccessControlHeaders } from "../utils/setAccessControlHeaders";
||||||| parent of 693c036 (add support for `create-image` endpoint)
import mockServerData from "../mockoonFile.json";
=======
import mockServerData from "../mockoonFile.json";
import { allowAllHeaderTypes } from "../utils/allowAllHeaderTypes";
>>>>>>> 693c036 (add support for `create-image` endpoint)
import { toExpressDynamicEndpoint } from "../utils/toExpressDynamicEndpoint";
import { addMockDataToCondition } from "./add-mock-data-to-route/conditionLegacy";
import { addMockDataToConditions } from "./add-mock-data-to-route/conditions";
import { addMockDataGetGuestVisitInteraction } from "./add-mock-data-to-route/getGuestVisitInteraction";
import { addMockDataGuestVisitCreateImage } from "./add-mock-data-to-route/guestVisitCreateImage";
import { addMockDataGuestVisitEligibility } from "./add-mock-data-to-route/guestVisitEligibility";
import { addMockDataGuestVisits } from "./add-mock-data-to-route/guestVisits";
import { addMockDataPostGuestVisitInteraction } from "./add-mock-data-to-route/postGuestVisitInteraction";

/** Updates each route's config (if necessary) and adds type safe mock data. */
export const updateAllRoutes = () => {
<<<<<<< HEAD
  setAccessControlHeaders(mockServerData);
||||||| parent of 693c036 (add support for `create-image` endpoint)
=======
  allowAllHeaderTypes(mockServerData);
>>>>>>> 693c036 (add support for `create-image` endpoint)
  mockServerData.routes.forEach((route) => {
    // Update OpenAPI dynamic routes to Express.js dynamic routes
    if (route.endpoint.includes("{")) {
      route.endpoint = toExpressDynamicEndpoint(route.endpoint);
    }
    // Add appropriate mock data and route config to each endpoint
    switch (route.endpoint) {
      case "conditions":
        addMockDataToConditions(route);
        break;
      case "conditions/:conditionLegacy":
        addMockDataToCondition(route);
        break;
      case "guest-visits/:visitId/interaction":
        route.method === "get"
          ? addMockDataGetGuestVisitInteraction(route)
          : addMockDataPostGuestVisitInteraction(route);
        break;
      case "guest-visits/eligibility":
        addMockDataGuestVisitEligibility(route);
        break;
      case "guest-visits/:visitId/create-image":
        addMockDataGuestVisitCreateImage(route);
        break;
      case "guest-visits":
        addMockDataGuestVisits(route);
        break;
    }
  });
};
