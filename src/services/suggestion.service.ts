import { FieldValues } from "react-hook-form";
import {
  User,
  UserComment,
  UserSuggestion,
} from "../types/suggestion.interfaces";
import { generateId } from "../utils/data-format-utils";
import localStorageService from "./local-storage.service";
import { mockSuggestions } from "./mock-data";

class SuggestionService {
  getSuggestions(): UserSuggestion[] {
    return localStorageService.getSuggestions() || mockSuggestions;
  }

  findSuggestionByTitle(title: string): UserSuggestion | undefined {
    return this.getSuggestions().find(
      (suggestion) => suggestion.title === title
    );
  }

  getFirstSuggestion(): UserSuggestion | undefined {
    return this.getSuggestions()[0];
  }

  createNewSuggestion(data: FieldValues): UserSuggestion {
    const newSuggestionId = generateId();
    const newSuggestionAuthor: User = {
      id: generateId(),
      firstName: "Me",
    };

    return {
      id: newSuggestionId,
      title: data.suggestionTitle,
      description: data.suggestionDescription,
      timestamp: new Date(),
      author: newSuggestionAuthor,
      comments: [],
    };
  }

  addCommentToSuggestion(
    suggestion: UserSuggestion,
    commentContent: string
  ): UserSuggestion | null {
    if (!suggestion || !commentContent.trim()) {
      console.error("Invalid suggestion or comment content.");
      return null;
    }

    const newComment: UserComment = {
      id: generateId(),
      suggestionId: suggestion.id,
      author: {
        id: generateId(),
        firstName: "Me",
      },
      content: commentContent,
      timestamp: new Date(),
    };

    const updatedSuggestion: UserSuggestion = {
      ...suggestion,
      comments: [...suggestion.comments, newComment],
    };

    try {
      localStorageService.updateSuggestionComments(
        updatedSuggestion,
        this.getSuggestions()
      );

      const foundUpdatedSuggestion: UserSuggestion | null =
        localStorageService.getSuggestionById(updatedSuggestion.id);

      if (foundUpdatedSuggestion) {
        return foundUpdatedSuggestion;
      } else {
        console.error("Failed to find the updated suggestion.");
        return null;
      }
    } catch (error) {
      console.error("An error occurred while updating the suggestion:", error);
      return null;
    }
  }
}

export const suggestionService = new SuggestionService();
