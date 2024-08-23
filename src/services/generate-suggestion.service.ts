import { UserSuggestion, User } from "../types/suggestion.interfaces";
import { faker } from "@faker-js/faker";
import { generateId } from "../utils/data-format-utils";

class SuggestionGenerator {
  static generateRandomUser(): User {
    return {
      id: generateId(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      title: Math.random() > 0.5 ? faker.person.prefix() : undefined,
    };
  }

  static generateRandomSuggestion(): UserSuggestion {
    const id = generateId();
    return {
      id,
      title: `Suggestion ${faker.lorem.sentence()}`,
      description: `Description ${faker.lorem.sentences(10)}`,
      timestamp: new Date(),
      author: this.generateRandomUser(),
      comments: [],
    };
  }
}

export { SuggestionGenerator };
