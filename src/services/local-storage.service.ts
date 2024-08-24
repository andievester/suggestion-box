import { UserSuggestion } from "../types/suggestion.interfaces";
import { mockSuggestions } from "./mock-data";

class localStorageService {
  private static SUGGESTIONS_KEY = "suggestions";

  static initialize() {
    try {
      if (!localStorage.getItem(this.SUGGESTIONS_KEY)) {
        localStorage.setItem(
          this.SUGGESTIONS_KEY,
          JSON.stringify(mockSuggestions)
        );
      }
    } catch (error) {
      console.error("Error initializing local storage:", error);
    }
  }

  static addNewSuggestion(suggestions: UserSuggestion[]) {
    try {
      localStorage.setItem(this.SUGGESTIONS_KEY, JSON.stringify(suggestions));
    } catch (error) {
      console.error("Error adding new suggestion to local storage:", error);
    }
  }

  static updateSuggestionComments(
    updatedSuggestion: UserSuggestion,
    prevSuggestions: UserSuggestion[]
  ) {
    try {
      const suggestionToUpdate = prevSuggestions.find(
        (suggestion) => suggestion.id === updatedSuggestion.id
      );

      let updatedSuggestions;

      if (suggestionToUpdate) {
        updatedSuggestions = prevSuggestions.map((suggestion) =>
          suggestion.id === updatedSuggestion.id
            ? updatedSuggestion
            : suggestion
        );
      } else {
        updatedSuggestions = prevSuggestions;
        console.error("Suggestion not found");
      }

      localStorage.setItem(
        this.SUGGESTIONS_KEY,
        JSON.stringify(updatedSuggestions)
      );
    } catch (error) {
      console.error(
        "Error updating suggestion comments in local storage:",
        error
      );
    }
  }

  static getSuggestions(): UserSuggestion[] {
    try {
      const item = localStorage.getItem(this.SUGGESTIONS_KEY);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error("Error retrieving suggestions from local storage:", error);
      return [];
    }
  }

  static getSuggestionById(id: number): UserSuggestion | null {
    try {
      const suggestions = this.getSuggestions();
      return suggestions.find((suggestion) => suggestion.id === id) || null;
    } catch (error) {
      console.error(
        "Error retrieving suggestion by ID from local storage:",
        error
      );
      return null;
    }
  }
}

export default localStorageService;
