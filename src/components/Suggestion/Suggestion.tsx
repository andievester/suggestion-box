import "./Suggestion.css";
import { useSuggestionContext } from "../../contexts/SuggestionContext";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { suggestionService } from "../../services/suggestion.service";
import SuggestionComment from "../SuggestionComment/SuggestionComment";
import { UserSuggestion } from "../../types/suggestion.interfaces";
import localStorageService from "../../services/local-storage.service";
import { useSuggestionListContext } from "../../contexts/SuggestionListContext";

const Suggestion = () => {
  const { setSuggestions } = useSuggestionListContext();

  const [initialLoad, setInitialLoad] = useState(true);

  const [shouldScroll, setShouldScroll] = useState(false);

  const { selectedSuggestion, setSelectedSuggestion } = useSuggestionContext();

  const [newComment, setNewComment] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const commentsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
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
      const foundUpdatedSuggestion: UserSuggestion | null =
        suggestionService.addCommentToSuggestion(
          selectedSuggestion,
          newComment
        );

      if (foundUpdatedSuggestion) {
        setSelectedSuggestion(foundUpdatedSuggestion);
      } else {
        console.error("Suggestion does not exist.");
      }

      const updatedSuggestionsList: UserSuggestion[] =
        localStorageService.getSuggestions();

      setSuggestions(updatedSuggestionsList);
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
    <div className="scrollbox-wrapper">
      <div className="sticky-header">
        {selectedSuggestion && <h2>{selectedSuggestion.title}</h2>}
        {selectedSuggestion && <p>{selectedSuggestion.description}</p>}
      </div>
      <div className="scrollbox-content suggestion-comments">
        {selectedSuggestion?.comments.length === 0 ? (
          <p className="no-comments-message">No comments yet!</p>
        ) : (
          <ListGroup>
            {selectedSuggestion?.comments.map((comment) => (
              <SuggestionComment
                key={comment.id}
                comment={comment}
              ></SuggestionComment>
            ))}
            <div ref={commentsEndRef} />
          </ListGroup>
        )}
      </div>
      <div className="footer-actions">
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
