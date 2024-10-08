import { useCallback, useEffect, useState } from "react";
import { useSuggestionContext } from "../../contexts/SuggestionContext";
import { Link } from "react-router-dom";
import "./SuggestionList.css";
import NewSuggestionModal from "../NewSuggestionModal/NewSuggestionModal";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Initials from "../Initials/Initials";
import { formatTimestamp } from "../../utils/data-format-utils";
import { useSuggestionListContext } from "../../contexts/SuggestionListContext";
import { UserSuggestion } from "../../types/suggestion.interfaces";
import { suggestionService } from "../../services/suggestion.service";
import generateSuggestionService from "../../services/generate-suggestion.service";

function SuggestionList({
  onSuggestionClick,
}: Readonly<{
  onSuggestionClick: (suggestion: UserSuggestion) => void;
}>) {
  const { selectedSuggestion } = useSuggestionContext();

  const suggestions: UserSuggestion[] = suggestionService.getSuggestions();

  const { addSuggestion } = useSuggestionListContext();

  const [activeSuggestionId, setActiveSuggestionId] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedSuggestion) {
      setActiveSuggestionId(selectedSuggestion.id);
    } else if (suggestions.length > 0) {
      setActiveSuggestionId(suggestions[0]?.id || null);
    }
  }, [selectedSuggestion, suggestions]);

  const addRandomSuggestion = useCallback(() => {
    const newSuggestion: UserSuggestion =
      generateSuggestionService.generateRandomSuggestion();
    addSuggestion(newSuggestion);
  }, [addSuggestion]);

  useEffect(() => {
    const interval = setInterval(addRandomSuggestion, 300000);
    return () => clearInterval(interval);
  }, [addRandomSuggestion]);

  const handleSuggestionClick = (suggestion: UserSuggestion) => {
    onSuggestionClick(suggestion);
    setActiveSuggestionId(suggestion.id);
  };

  return (
    <div className="scrollbox-wrapper">
      <div className="scrollbox-content">
        <ListGroup>
          {suggestions.map((suggestion) => (
            <ListGroupItem
              key={suggestion.id}
              className={`d-flex justify-content-between suggestion-list-group-item ${
                activeSuggestionId === suggestion.id
                  ? "suggestion-list-group-item-active"
                  : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Link
                to={`/${suggestion.title}`}
                className="btn btn-link btn-block text-left"
                style={{ all: "unset", cursor: "pointer" }}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div>
                  <strong>{suggestion.title}</strong>
                </div>
                <div>
                  <span className="suggestion-timestamp">
                    {formatTimestamp(suggestion.timestamp, false)}
                  </span>
                </div>
                <Initials user={suggestion.author} isCommentAuthor={false} />
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="footer-actions">
        <NewSuggestionModal />
      </div>
    </div>
  );
}

export default SuggestionList;
