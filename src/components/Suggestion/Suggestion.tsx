import "./Suggestion.css";
import { useSuggestionContext } from "../../contexts/SuggestionContext";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Initials from "../Initials/Initials";
import { ChangeEvent, useState } from "react";

const Suggestion = () => {
  const selectedSuggestion = useSuggestionContext();
  const [newComment, setNewComment] = useState("");
  const handleNewCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };
  const handleNewCommentSubmit = () => {
    if (newComment.trim()) {
      console.log(newComment);
    }
  };
  return (
    <div className="suggestion-wrapper">
      <div className="sticky-header">
        {selectedSuggestion && <h1>{selectedSuggestion.title}</h1>}
        {selectedSuggestion && <p>{selectedSuggestion.description}</p>}
      </div>
      <div className="suggestion-content">
        {selectedSuggestion.comments.length === 0 ? (
          <p className="no-comments-message">No comments yet!</p>
        ) : (
          <ListGroup>
            {selectedSuggestion.comments.map((comment) => (
              <ListGroupItem key={comment.id} className="d-flex comment">
                <Initials
                  user={comment.author}
                  isCommentAuthor={true}
                ></Initials>
                <div>{comment.content}</div>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>
      <div className="comment-input">
        <InputGroup>
          <FormControl
            value={newComment}
            onChange={handleNewCommentChange}
            placeholder="Add to the conversation"
            aria-label="Comment"
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
