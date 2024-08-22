import { useEffect, useState } from "react";
import "./App.css";
import { getFirstSuggestion, testSuggestions } from "./services/test-data";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import { UserSuggestion } from "./services/in-memory-data-provider";
import { SuggestionContext } from "./contexts/SuggestionContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const findSuggestionByTitle = (title: string) =>
  testSuggestions.find((suggestion) => suggestion.title === title);

function App() {
  const { suggestionTitle } = useParams();
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<UserSuggestion>();

  const navigate = useNavigate();

  useEffect(() => {
    if (suggestionTitle) {
      const suggestion = findSuggestionByTitle(suggestionTitle);
      if (suggestion) {
        setSelectedSuggestion(suggestion);
      } else {
        navigate(`/${getFirstSuggestion().title}`);
      }
    } else {
      const firstSuggestion = getFirstSuggestion();
      setSelectedSuggestion(firstSuggestion);
      navigate(`/${firstSuggestion.title}`);
    }
  }, [suggestionTitle, navigate]);

  const handleSelectSuggestion = (suggestion: UserSuggestion) => {
    setSelectedSuggestion(suggestion);
    navigate(`/${suggestion.title}`);
  };

  return (
    <SuggestionContext.Provider
      value={selectedSuggestion ? selectedSuggestion : testSuggestions[0]}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SuggestionList
              suggestions={testSuggestions}
              onSuggestionClick={handleSelectSuggestion}
            />
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </SuggestionContext.Provider>
  );
}

export default App;
