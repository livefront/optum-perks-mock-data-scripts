export const addMockDataToCondition = (route: any) => {
  route.responses[0].body = "";
  route.responses[0].bodyType = "FILE";
  route.responses[0].filePath =
    "./generated-json/detailsForConditions/{{urlParam 'conditionLegacy'}}.json";
};
