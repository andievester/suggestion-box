import "./Suggestion.css";
import { useSuggestionContext } from "../../contexts/SuggestionContext";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Initials from "../Initials/Initials";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { formatTimestamp } from "../../utils/data-format-utils";
import { UserSuggestion } from "../../types/suggestion.interfaces";
import { suggestionService } from "../../services/suggestion.service";

const Suggestion = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  const [shouldScroll, setShouldScroll] = useState(false);

  const { selectedSuggestion, setSelectedSuggestion } = useSuggestionContext();

  const [newComment, setNewComment] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const commentsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("first load", selectedSuggestion);
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    console.log("selected", selectedSuggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedSuggestion]);

  useEffect(() => {
    if (!initialLoad && shouldScroll) {
      commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [shouldScroll, initialLoad]);

  const handleNewCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = () => {
    if (newComment.trim() && selectedSuggestion) {
      const updatedSuggestion: UserSuggestion =
        suggestionService.addCommentToSuggestion(
          selectedSuggestion,
          newComment
        );

      setSelectedSuggestion(updatedSuggestion);
      setNewComment("");
      setShouldScroll(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNewCommentSubmit();
    }
  };

  return (
    <div className="suggestion-wrapper">
      <div className="sticky-header">
        {selectedSuggestion && <h2>{selectedSuggestion.title}</h2>}
        {selectedSuggestion && <p>{selectedSuggestion.description}</p>}
      </div>
      <div className="suggestion-comments">
        {selectedSuggestion?.comments.length === 0 ? (
          <p className="no-comments-message">No comments yet!</p>
        ) : (
          <ListGroup>
            {selectedSuggestion?.comments.map((comment) => (
              <div
                className={`comment-wrapper ${
                  !comment.author.lastName ? "my-comment-wrapper" : ""
                }`}
                key={comment.id}
              >
                <Initials
                  user={comment.author}
                  isCommentAuthor={true}
                ></Initials>
                <div className="comment-and-timestamp">
                  <ListGroupItem
                    className={`d-flex comment ${
                      !comment.author.lastName
                        ? "my-comment bg-primary bg-opacity-10"
                        : ""
                    }`}
                  >
                    <div>{comment.content}</div>
                  </ListGroupItem>
                  <div
                    className={`comment-timestamp ${
                      comment.author.lastName ? "my-comment-timestamp" : ""
                    }`}
                  >
                    {formatTimestamp(comment.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            <div ref={commentsEndRef} />
          </ListGroup>
        )}
      </div>
      <div className="comment-input">
        <InputGroup>
          <FormControl
            value={newComment}
            onChange={handleNewCommentChange}
            onKeyDown={handleKeyDown}
            placeholder="Add to the conversation"
            aria-label="Comment"
            ref={inputRef}
          />
          <Button
            className="submit-comment-btn"
            onClick={handleNewCommentSubmit}
          >
            <i className="bi bi-arrow-right"></i>
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Suggestion;
