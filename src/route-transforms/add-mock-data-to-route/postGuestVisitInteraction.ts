import {
  postInteractionOne,
  postInteractionTwo,
} from "../../responses/guest-visits/postInteraction";

export const addMockDataPostGuestVisitInteraction = (route: any) => {
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
};
