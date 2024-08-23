import { useEffect, useState } from "react";
import "./App.css";
import { testSuggestions } from "./services/test-data";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import { SuggestionProvider } from "./contexts/SuggestionContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { SuggestionListProvider } from "./contexts/SuggestionListContext";
import { UserSuggestion } from "./types/suggestion.interfaces";

const findSuggestionByTitle = (title: string) =>
  testSuggestions.find((suggestion) => suggestion.title === title);

function AppContent() {
  const { suggestionTitle } = useParams();

  const [selectedSuggestion, setSelectedSuggestion] = useState<
    UserSuggestion | undefined
  >(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSuggestion && suggestionTitle) {
      const suggestion = findSuggestionByTitle(suggestionTitle);
      if (suggestion) {
        setSelectedSuggestion(suggestion);
      }
    }
  }, [suggestionTitle, navigate, selectedSuggestion]);

  const handleSelectSuggestion = (suggestion: UserSuggestion) => {
    setSelectedSuggestion(suggestion);
    navigate(`/${suggestion.title}`);
  };

  const suggestionContextValue = { selectedSuggestion, setSelectedSuggestion };

  return (
    <SuggestionListProvider initialSuggestions={testSuggestions}>
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
