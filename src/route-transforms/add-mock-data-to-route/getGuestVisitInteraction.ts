import { getInteraction } from "../../responses/guest-visits/getInteraction";

export const addMockDataGetGuestVisitInteraction = (route: any) => {
  route.responses[0].body = JSON.stringify(getInteraction, null, 2);
};
