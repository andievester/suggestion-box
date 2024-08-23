export interface UserSuggestion {
  id: number;
  title: string;
  description: string;
  timestamp: Date;
  author: User;
  comments: UserComment[];
}

export interface User {
  id: number;
  title?: string;
  firstName: string;
  lastName?: string;
}

export interface UserComment {
  id: number;
  suggestionId: number;
  author: User;
  content: string;
  timestamp: Date;
}
