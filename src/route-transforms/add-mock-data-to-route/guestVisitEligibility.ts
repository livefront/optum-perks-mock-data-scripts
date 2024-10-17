import { eligibility } from "../../responses/guest-visits/eligibility";

export const addMockDataGuestVisitEligibility = (route: any) => {
  route.responses[0].body = JSON.stringify(eligibility, null, 2);
};
