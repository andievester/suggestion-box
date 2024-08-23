import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { UserSuggestion } from "../types/suggestion.interfaces";

interface SuggestionContextProps {
  selectedSuggestion: UserSuggestion | undefined;
  setSelectedSuggestion: Dispatch<SetStateAction<UserSuggestion | undefined>>;
}

export const SuggestionContext = createContext<
  SuggestionContextProps | undefined
>(undefined);

export function SuggestionProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: SuggestionContextProps;
}) {
  return (
    <SuggestionContext.Provider value={value}>
      {children}
    </SuggestionContext.Provider>
  );
}

export function useSuggestionContext() {
  const context = useContext(SuggestionContext);

  if (context === undefined) {
    throw new Error(
      "useSuggestionContext must be used within a SuggestionProvider"
    );
  }

  return context;
}
