import { UserSuggestion } from "../types/suggestion.interfaces";
import { mockSuggestions } from "./mock-data";

class localStorageService {
  private static SUGGESTIONS_KEY = "suggestions";

  static initialize() {
    if (!localStorage.getItem(this.SUGGESTIONS_KEY)) {
      localStorage.setItem(
        this.SUGGESTIONS_KEY,
        JSON.stringify(mockSuggestions)
      );
    }
  }

  static addNewSuggestion(suggestions: UserSuggestion[]) {
    localStorage.setItem(this.SUGGESTIONS_KEY, JSON.stringify(suggestions));
  }

  static updateSuggestionComments(
    updatedSuggestion: UserSuggestion,
    prevSuggestions: UserSuggestion[]
  ) {
    const suggestionToUpdate = prevSuggestions.find(
      (suggestion) => suggestion.id === updatedSuggestion.id
    );

    let updatedSuggestions;

    if (suggestionToUpdate) {
      updatedSuggestions = prevSuggestions.map((suggestion) =>
        suggestion.id === updatedSuggestion.id ? updatedSuggestion : suggestion
      );
    } else {
      updatedSuggestions = prevSuggestions;
      console.error("Suggestion not found");
    }

    localStorage.setItem(
      this.SUGGESTIONS_KEY,
      JSON.stringify(updatedSuggestions)
    );
  }

  static getSuggestions(): UserSuggestion[] {
    const item = localStorage.getItem(this.SUGGESTIONS_KEY);
    return item ? JSON.parse(item) : [];
  }

  static getSuggestionById(id: number): UserSuggestion | null {
    const suggestions = this.getSuggestions();
    return suggestions.find((suggestion) => suggestion.id === id) || null;
  }
}

export default localStorageService;
