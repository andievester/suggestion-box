import { faker } from "@faker-js/faker";

export const formatTimestamp = (timestamp: Date) => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return `${date.toLocaleDateString()} @ ${date.toLocaleTimeString(
    [],
    options
  )}`;
};

export const generateId = () => {
  return faker.number.int({ min: 100000000, max: 999999999 });
};
