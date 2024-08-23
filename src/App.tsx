import { useEffect, useState } from "react";
import "./App.css";
import { mockSuggestions } from "./services/mock-data";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import { SuggestionProvider } from "./contexts/SuggestionContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { SuggestionListProvider } from "./contexts/SuggestionListContext";
import { UserSuggestion } from "./types/suggestion.interfaces";
import { suggestionService } from "./services/suggestion.service";

function AppContent() {
  const { suggestionTitle } = useParams();

  const [selectedSuggestion, setSelectedSuggestion] = useState<
    UserSuggestion | undefined
  >(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSuggestion && suggestionTitle) {
      const suggestion =
        suggestionService.findSuggestionByTitle(suggestionTitle);
      console.log("app - first condition", suggestion);
      if (suggestion) {
        console.log("app - second condition", suggestion);
        setSelectedSuggestion(suggestion);
      } else {
        const firstSuggestion = suggestionService.getFirstSuggestion();

        console.log("app - third condition", firstSuggestion);
        setSelectedSuggestion(firstSuggestion);
        navigate(`/${firstSuggestion.title}`);
      }
    }
  }, [suggestionTitle, navigate, selectedSuggestion]);

  const handleSelectSuggestion = (suggestion: UserSuggestion) => {
    setSelectedSuggestion(suggestion);
    navigate(`/${suggestion.title}`);
  };

  const suggestionContextValue = { selectedSuggestion, setSelectedSuggestion };

  return (
    <SuggestionListProvider initialSuggestions={mockSuggestions}>
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
