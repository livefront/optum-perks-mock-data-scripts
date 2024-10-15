import { OCApi } from "./api-types";
import { faker } from "@faker-js/faker";

const getConditions = (amount: number): OCApi.Schemas.ConditionSummary[] => {
  const conditions = new Array(amount).fill(null);
  return conditions.map((condition, index) => ({
    label: index.toString(),
    name: faker.food.dish(),
    primaryDescription: faker.food.description(),
    primaryImagePath: "",
    urlSlug: "",
  }));
};

export const response: OCApi.Schemas.ConditionListByCategory = [
  {
    name: "Cars",
    fabricId: 1234,
    conditions: getConditions(8),
  },
];
