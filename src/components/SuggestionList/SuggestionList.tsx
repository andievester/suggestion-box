import { useEffect, useState } from "react";
import { useSuggestionContext } from "../../contexts/SuggestionContext";
import { Link } from "react-router-dom";
import "./SuggestionList.css";
import NewSuggestionModal from "../NewSuggestionModal/NewSuggestionModal";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Initials from "../Initials/Initials";
import { formatTimestamp } from "../../utils/data-format-utils";
import { useSuggestionListContext } from "../../contexts/SuggestionListContext";
import { UserSuggestion } from "../../types/suggestion.interfaces";

function SuggestionList({
  onSuggestionClick,
}: Readonly<{
  onSuggestionClick: (suggestion: UserSuggestion) => void;
}>) {
  const { selectedSuggestion } = useSuggestionContext();

  const { suggestions } = useSuggestionListContext();

  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (selectedSuggestion) {
      setActiveSuggestionId(selectedSuggestion.id);
    } else if (suggestions.length > 0) {
      setActiveSuggestionId(suggestions[0]?.id || null);
    }
  }, [selectedSuggestion, suggestions]);

  function handleSuggestionClick(suggestion: UserSuggestion) {
    onSuggestionClick(suggestion);
    setActiveSuggestionId(suggestion.id);
  }

  return (
    <div className="suggestion-list-wrapper">
      <div className="suggestion-list-content">
        <ListGroup>
          {suggestions.map((suggestion) => (
            <ListGroupItem
              key={suggestion.id}
              className={`d-flex justify-content-between list-group-item-hover ${
                activeSuggestionId === suggestion.id
                  ? "list-group-item-active"
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
                  <span className="secondary-text">
                    {formatTimestamp(suggestion.timestamp)}
                  </span>
                </div>
                <Initials user={suggestion.author} isCommentAuthor={false} />
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="new-suggestion">
        <NewSuggestionModal />
      </div>
    </div>
  );
}

export default SuggestionList;
