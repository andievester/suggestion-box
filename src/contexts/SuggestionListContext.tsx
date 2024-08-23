import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { UserSuggestion } from "../types/suggestion.interfaces";

interface SuggestionListContextProps {
  suggestions: UserSuggestion[];
  setSuggestions: Dispatch<SetStateAction<UserSuggestion[]>>;
  addSuggestion: (suggestion: UserSuggestion) => void;
}

export const SuggestionListContext = createContext<
  SuggestionListContextProps | undefined
>(undefined);

export function SuggestionListProvider({
  children,
  initialSuggestions,
}: {
  children: ReactNode;
  initialSuggestions: UserSuggestion[];
}) {
  const [suggestions, setSuggestions] =
    useState<UserSuggestion[]>(initialSuggestions);

  const addSuggestion = (suggestion: UserSuggestion) => {
    setSuggestions((prevSuggestions) => [suggestion, ...prevSuggestions]);
  };

  return (
    <SuggestionListContext.Provider
      value={{ suggestions, setSuggestions, addSuggestion }}
    >
      {children}
    </SuggestionListContext.Provider>
  );
}

export function useSuggestionListContext() {
  const context = useContext(SuggestionListContext);
  if (context === undefined) {
    throw new Error(
      "useSuggestionListContext must be used within a SuggestionListProvider"
    );
  }
  return context;
}
