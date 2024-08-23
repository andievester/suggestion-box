export interface UserSuggestion {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  author: User;
  comments: UserComment[];
}

export interface User {
  id: string;
  title?: string;
  firstName: string;
  lastName?: string;
}

export interface UserComment {
  id: string;
  suggestionId: string;
  author: User;
  content: string;
  timestamp: Date;
}
