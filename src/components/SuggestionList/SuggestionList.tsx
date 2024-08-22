import { Link } from "react-router-dom";
import { UserSuggestion } from "../../services/in-memory-data-provider";
import "./SuggestionList.css";
import NewSuggestionModal from "../NewSuggestionModal/NewSuggestionModal";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Initials from "../Initials/Initials";
import { useState } from "react";

interface Props {
  suggestions: UserSuggestion[];
  onSuggestionClick: (suggestionId: UserSuggestion) => void;
}

function SuggestionList({ suggestions, onSuggestionClick }: Readonly<Props>) {
  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(
    null
  );

  function setActiveSuggestion(suggestion: UserSuggestion) {
    console.log(suggestion.id, activeSuggestionId);
    onSuggestionClick(suggestion);
    setActiveSuggestionId(suggestion.id);
  }

  function formatTimestamp(timestamp: Date) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return `${date.toLocaleDateString()} @ ${date.toLocaleTimeString(
      [],
      options
    )}`;
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
              onClick={() => setActiveSuggestion(suggestion)}
            >
              <Link
                to={`/${suggestion.title}`}
                className="btn btn-link btn-block text-left"
                style={{ all: "unset", cursor: "pointer" }}
                onClick={() => onSuggestionClick(suggestion)}
              >
                <div>
                  <strong>{suggestion.title}</strong>
                </div>
                <div>
                  <span className="secondary-text">
                    {formatTimestamp(suggestion.timestamp)}
                  </span>
                </div>
                <Initials
                  user={suggestion.author}
                  isCommentAuthor={false}
                ></Initials>
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="new-suggestion">
        <NewSuggestionModal></NewSuggestionModal>
      </div>
    </div>
  );
}

export default SuggestionList;
