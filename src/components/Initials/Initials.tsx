import { User } from "../../types/suggestion.interfaces";
import "./Initials.css";

interface Props {
  user: User;
  isCommentAuthor: boolean;
}

const Initials = ({ user, isCommentAuthor }: Readonly<Props>) => {
  function getInitials(user: User) {
    const firstInitial = user.firstName.charAt(0).toUpperCase();
    const lastInitial = user.lastName?.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }

  function formatAuthor(user: User) {
    const title = user.title ? `${user.title} ` : "";
    return `${title}${user.firstName} ${user.lastName}`;
  }

  return (
    <div>
      {user.firstName && user.lastName ? (
        <div className="d-flex align-items-baseline">
          <div className="initials-icon">{getInitials(user)}</div>
          {!isCommentAuthor && (
            <span className="author-name">{formatAuthor(user)}</span>
          )}
        </div>
      ) : (
        <div className="d-flex align-items-center">
          <i className="bi bi-person-raised-hand fs-5 me-icon"></i>
          {!isCommentAuthor && (
            <span className="author-name">{user.firstName}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Initials;
