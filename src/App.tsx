import { useEffect, useState } from "react";
import "./App.css";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import { SuggestionProvider } from "./contexts/SuggestionContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { SuggestionListProvider } from "./contexts/SuggestionListContext";
import { UserSuggestion } from "./types/suggestion.interfaces";
import { suggestionService } from "./services/suggestion.service";
import localStorageService from "./services/local-storage.service";

function AppContent() {
  const storedSuggestions: UserSuggestion[] =
    localStorageService.getSuggestions();

  const { suggestionTitle } = useParams();

  const [selectedSuggestion, setSelectedSuggestion] = useState<
    UserSuggestion | undefined
  >(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSuggestion && suggestionTitle) {
      const suggestion: UserSuggestion | undefined =
        suggestionService.findSuggestionByTitle(suggestionTitle);
      if (suggestion) {
        setSelectedSuggestion(suggestion);
      } else {
        const firstSuggestion: UserSuggestion | undefined =
          storedSuggestions[0];
        if (firstSuggestion) {
          setSelectedSuggestion(firstSuggestion);
          navigate(`/${firstSuggestion.title}`);
        } else {
          console.error("No suggestions available to navigate to.");
        }
      }
    }
  }, [suggestionTitle, navigate, selectedSuggestion]);

  const handleSelectSuggestion = (suggestion: UserSuggestion) => {
    setSelectedSuggestion(suggestion);
    navigate(`/${suggestion.title}`);
  };

  const suggestionContextValue = { selectedSuggestion, setSelectedSuggestion };

  return (
    <SuggestionListProvider initialSuggestions={storedSuggestions}>
      <SuggestionProvider value={suggestionContextValue}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SuggestionList onSuggestionClick={handleSelectSuggestion} />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </SuggestionProvider>
    </SuggestionListProvider>
  );
}

function App() {
  return <AppContent />;
}

export default App;
