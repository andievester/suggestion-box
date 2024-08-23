import Initials from "../Initials/Initials";
import { ListGroupItem } from "react-bootstrap";
import { formatTimestamp } from "../../utils/data-format-utils";
import { UserComment } from "../../types/suggestion.interfaces";
import "./SuggestionComment.css";

interface Props {
  comment: UserComment;
}

const SuggestionComment = ({ comment }: Props) => {
  return (
    <div
      className={`comment-wrapper ${
        !comment.author.lastName ? "my-comment-wrapper" : ""
      }`}
      key={comment.id}
    >
      <Initials user={comment.author} isCommentAuthor={true}></Initials>
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
  );
};

export default SuggestionComment;
