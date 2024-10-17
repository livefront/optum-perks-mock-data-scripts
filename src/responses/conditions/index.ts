import { OCApi } from "../../api-types";
import conditions from "../../mock-data/conditions";
import conditionCategories from "../../mock-data/conditionCategories";

const getConditions = (
  amount: number,
  indexToStartFrom: number
): OCApi.Schemas.ConditionSummary[] => {
  const emptyConditions = new Array(amount).fill(null);
  return emptyConditions.map((_, index) => {
    const condition = conditions[indexToStartFrom + index];
    return {
      label: condition.urlSlug,
      name: condition.name,
      primaryDescription: condition.description,
      primaryImagePath: "",
      urlSlug: condition.urlSlug,
    };
  });
};

const getConditionListByCategory = (
  amount: number
): OCApi.Schemas.ConditionListByCategory => {
  const emptyConditionList = new Array(amount).fill(null);
  return emptyConditionList.map((_, index) => ({
    name: conditionCategories[index],
    fabricId: index,
    conditions: getConditions(4, index * 4),
  }));
};

export const conditionsByCategory: OCApi.Schemas.ConditionListByCategory =
  getConditionListByCategory(6);
