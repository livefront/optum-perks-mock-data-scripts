import { conditionsByCategory } from "../../responses/conditions";

export const addMockDataToConditions = (route: any) => {
  route.responses[0].body = JSON.stringify(conditionsByCategory, null, 2);
};
