import { createImage } from "../../responses/guest-visits/createImage";

export const addMockDataGuestVisitCreateImage = (route: any) => {
  route.responses[0].body = JSON.stringify(createImage, null, 2);
};
