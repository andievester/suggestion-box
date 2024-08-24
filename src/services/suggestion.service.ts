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
    try {
      const suggestions = localStorageService.getSuggestions();
      return suggestions || mockSuggestions;
    } catch (error) {
      console.error("Failed to retrieve suggestions:", error);
      return mockSuggestions;
    }
  }

  findSuggestionByTitle(title: string): UserSuggestion | undefined {
    try {
      return this.getSuggestions().find(
        (suggestion) => suggestion.title === title
      );
    } catch (error) {
      console.error("Error finding suggestion by title:", error);
      return undefined;
    }
  }

  getFirstSuggestion(): UserSuggestion | undefined {
    try {
      return this.getSuggestions()[0];
    } catch (error) {
      console.error("Error retrieving the first suggestion:", error);
      return undefined;
    }
  }

  createNewSuggestion(data: FieldValues): UserSuggestion {
    try {
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
    } catch (error) {
      console.error("Error creating a new suggestion:", error);
      throw new Error("Unable to create a new suggestion.");
    }
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
