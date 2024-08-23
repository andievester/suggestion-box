import { v4 as uuidv4 } from "uuid";
import {
  User,
  UserSuggestion,
  UserComment,
} from "../types/suggestion.interfaces";

class SuggestionService {
  private suggestions: UserSuggestion[];
  private selectedSuggestion: UserSuggestion | undefined;

  constructor(initialSuggestions: UserSuggestion[]) {
    this.suggestions = initialSuggestions;
    this.selectedSuggestion = undefined;
  }

  getSuggestions(): UserSuggestion[] {
    return this.suggestions;
  }

  getSelectedSuggestion(): UserSuggestion | undefined {
    return this.selectedSuggestion;
  }

  setSelectedSuggestion(suggestion: UserSuggestion) {
    this.selectedSuggestion = suggestion;
  }

  addSuggestion(
    title: string,
    description: string,
    author: User
  ): UserSuggestion {
    const newSuggestion: UserSuggestion = {
      id: uuidv4(),
      title,
      description,
      timestamp: new Date(),
      author,
      comments: [],
    };

    this.suggestions = [newSuggestion, ...this.suggestions];
    this.setSelectedSuggestion(newSuggestion);

    return newSuggestion;
  }

  addCommentToSuggestion(
    suggestionId: string,
    content: string,
    author: User
  ): UserComment | null {
    const suggestion = this.suggestions.find((s) => s.id === suggestionId);
    if (!suggestion) return null;

    const newComment: UserComment = {
      id: uuidv4(),
      suggestionId,
      author,
      content,
      timestamp: new Date(),
    };

    suggestion.comments.push(newComment);
    if (this.selectedSuggestion?.id === suggestionId) {
      this.selectedSuggestion.comments = suggestion.comments;
    }

    return newComment;
  }

  findSuggestionByTitle(title: string): UserSuggestion | undefined {
    return this.suggestions.find((suggestion) => suggestion.title === title);
  }
}

export default SuggestionService;
