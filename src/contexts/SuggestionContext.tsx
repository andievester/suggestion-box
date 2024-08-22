import { createContext, useContext } from "react";
import { UserSuggestion } from "../services/in-memory-data-provider";

export const SuggestionContext = createContext<UserSuggestion | undefined>(
  undefined
);

export function useSuggestionContext() {
  const selectedSuggestion = useContext(SuggestionContext);

  if (selectedSuggestion === undefined) {
    throw new Error(
      "useSuggestionContext must be used with a SuggestionContext"
    );
  }

  return selectedSuggestion;
}
