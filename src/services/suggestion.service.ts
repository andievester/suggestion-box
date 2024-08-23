import { FieldValues } from "react-hook-form";
import {
  User,
  UserComment,
  UserSuggestion,
} from "../types/suggestion.interfaces";
import { generateId } from "../utils/data-format-utils";
import { mockSuggestions } from "./mock-data";

class SuggestionService {
  findSuggestionByTitle(title: string): UserSuggestion | undefined {
    return mockSuggestions.find((suggestion) => suggestion.title === title);
  }

  getFirstSuggestion = () => mockSuggestions[0];

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
  ): UserSuggestion {
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

    return {
      ...suggestion,
      comments: [...suggestion.comments, newComment],
    };
  }
}

export const suggestionService = new SuggestionService();
