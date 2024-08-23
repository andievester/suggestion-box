import { UserSuggestion } from "./suggestion.service";

export const getFirstSuggestion = () => testSuggestions[0];

export const testSuggestions: UserSuggestion[] = [
  {
    id: "suggestion-1",
    title: "Add Dark Mode",
    description: "Implement a dark mode option to reduce eye strain.",
    timestamp: new Date("2024-08-01T10:00:00Z"),
    author: {
      id: "author-1",
      firstName: "Me",
    },
    comments: [
      {
        id: "comment-1",
        suggestionId: "suggestion-1",
        author: {
          id: "author-2",
          firstName: "Bob",
          lastName: "Smith",
        },
        content: "This would be great! I've been waiting for a dark mode.",
        timestamp: new Date("2024-08-01T11:00:00Z"),
      },
      {
        id: "comment-2",
        suggestionId: "suggestion-1",
        author: {
          id: "author-3",
          firstName: "Alice",
          lastName: "Johnson",
        },
        content: "Dark mode is a must-have feature nowadays.",
        timestamp: new Date("2024-08-01T11:10:00Z"),
      },
      {
        id: "comment-3",
        suggestionId: "suggestion-1",
        author: {
          id: "author-4",
          firstName: "Me",
        },
        content: "I agree! My eyes would really appreciate a dark mode.",
        timestamp: new Date("2024-08-01T11:15:00Z"),
      },
      {
        id: "comment-4",
        suggestionId: "suggestion-1",
        author: {
          id: "author-5",
          firstName: "David",
          lastName: "Wilson",
        },
        content: "Hope this gets implemented soon!",
        timestamp: new Date("2024-08-01T11:20:00Z"),
      },
      {
        id: "comment-5",
        suggestionId: "suggestion-1",
        author: {
          id: "author-6",
          firstName: "Eva",
          lastName: "Miller",
        },
        content: "Dark mode is the future!",
        timestamp: new Date("2024-08-01T11:25:00Z"),
      },
      {
        id: "comment-6",
        suggestionId: "suggestion-1",
        author: {
          id: "author-7",
          firstName: "Frank",
          lastName: "Garcia",
        },
        content: "Would love to see this feature.",
        timestamp: new Date("2024-08-01T11:30:00Z"),
      },
      {
        id: "comment-7",
        suggestionId: "suggestion-1",
        author: {
          id: "author-8",
          firstName: "Grace",
          lastName: "Martinez",
        },
        content: "I use dark mode on every app. Please add it here too.",
        timestamp: new Date("2024-08-01T11:35:00Z"),
      },
      {
        id: "comment-8",
        suggestionId: "suggestion-1",
        author: {
          id: "author-9",
          firstName: "Henry",
          lastName: "Robinson",
        },
        content:
          "Yes, please! My eyes are begging for this feature. I've been using the app for months now, and the lack of a dark mode has been a constant strain on my eyes. The ability to switch to a dark theme would not only make the app more visually appealing but also significantly reduce eye strain during extended use. It's such a crucial feature that I believe many users would greatly appreciate, especially those of us who spend a lot of time on the app late into the night.",
        timestamp: new Date("2024-08-01T11:40:00Z"),
      },
      {
        id: "comment-9",
        suggestionId: "suggestion-1",
        author: {
          id: "author-10",
          firstName: "Ivy",
          lastName: "Clark",
        },
        content:
          "Dark mode would be a game changer. I've seen this feature become a standard in many other applications, and for good reason. Not only does it provide a more comfortable viewing experience in low-light conditions, but it also helps in saving battery life on OLED screens. Implementing dark mode would be a fantastic upgrade that would cater to a wider range of users and improve the overall usability of the app. It's a small change that could make a big difference for many of us who prefer to use the app in dimly lit environments.",
        timestamp: new Date("2024-08-01T11:45:00Z"),
      },
      {
        id: "comment-10",
        suggestionId: "suggestion-1",
        author: {
          id: "author-11",
          firstName: "Me",
        },
        content: "I can't wait for this to be implemented.",
        timestamp: new Date("2024-08-01T11:50:00Z"),
      },
      {
        id: "comment-11",
        suggestionId: "suggestion-1",
        author: {
          id: "author-12",
          firstName: "Kathy",
          lastName: "Lee",
        },
        content: "Dark mode is essential, especially for night use.",
        timestamp: new Date("2024-08-01T11:55:00Z"),
      },
      {
        id: "comment-12",
        suggestionId: "suggestion-1",
        author: {
          id: "author-13",
          firstName: "Liam",
          lastName: "Walker",
        },
        content: "Would definitely use dark mode if available.",
        timestamp: new Date("2024-08-01T12:00:00Z"),
      },
      {
        id: "comment-13",
        suggestionId: "suggestion-1",
        author: {
          id: "author-14",
          firstName: "Mia",
          lastName: "Harris",
        },
        content: "Dark mode is long overdue.",
        timestamp: new Date("2024-08-01T12:05:00Z"),
      },
      {
        id: "comment-14",
        suggestionId: "suggestion-1",
        author: {
          id: "author-15",
          firstName: "Noah",
          lastName: "Young",
        },
        content: "This would make the app so much better.",
        timestamp: new Date("2024-08-01T12:10:00Z"),
      },
      {
        id: "comment-15",
        suggestionId: "suggestion-1",
        author: {
          id: "author-16",
          firstName: "Olivia",
          lastName: "Allen",
        },
        content: "Please make this happen!",
        timestamp: new Date("2024-08-01T12:15:00Z"),
      },
      {
        id: "comment-16",
        suggestionId: "suggestion-1",
        author: {
          id: "author-17",
          firstName: "Paul",
          lastName: "King",
        },
        content: "Dark mode is a must!",
        timestamp: new Date("2024-08-01T12:20:00Z"),
      },
      {
        id: "comment-17",
        suggestionId: "suggestion-1",
        author: {
          id: "author-18",
          firstName: "Quinn",
          lastName: "Wright",
        },
        content: "Can't wait for this feature.",
        timestamp: new Date("2024-08-01T12:25:00Z"),
      },
      {
        id: "comment-18",
        suggestionId: "suggestion-1",
        author: {
          id: "author-19",
          firstName: "Ruby",
          lastName: "Lopez",
        },
        content: "This would be very useful, especially at night.",
        timestamp: new Date("2024-08-01T12:30:00Z"),
      },
      {
        id: "comment-19",
        suggestionId: "suggestion-1",
        author: {
          id: "author-20",
          firstName: "Sam",
          lastName: "Hill",
        },
        content: "Dark mode is needed for sure.",
        timestamp: new Date("2024-08-01T12:35:00Z"),
      },
      {
        id: "comment-20",
        suggestionId: "suggestion-1",
        author: {
          id: "author-21",
          firstName: "Tina",
          lastName: "Scott",
        },
        content: "I've been waiting for dark mode forever.",
        timestamp: new Date("2024-08-01T12:40:00Z"),
      },
      {
        id: "comment-21",
        suggestionId: "suggestion-1",
        author: {
          id: "author-22",
          firstName: "Ursula",
          lastName: "Adams",
        },
        content: "Dark mode would make the app look so much better.",
        timestamp: new Date("2024-08-01T12:45:00Z"),
      },
      {
        id: "comment-22",
        suggestionId: "suggestion-1",
        author: {
          id: "author-23",
          firstName: "Victor",
          lastName: "Baker",
        },
        content: "Can't wait for dark mode!",
        timestamp: new Date("2024-08-01T12:50:00Z"),
      },
      {
        id: "comment-23",
        suggestionId: "suggestion-1",
        author: {
          id: "author-24",
          firstName: "Wendy",
          lastName: "Clark",
        },
        content: "Dark mode is a must-have!",
        timestamp: new Date("2024-08-01T12:55:00Z"),
      },
    ],
  },
  {
    id: "suggestion-2",
    title: "Improve Search Functionality",
    description: "Enhance the search feature to include filtering and sorting.",
    timestamp: new Date("2024-08-02T14:30:00Z"),
    author: {
      id: "author-3",
      firstName: "Charlie",
      lastName: "Brown",
    },
    comments: [],
  },
  {
    id: "suggestion-3",
    title: "Add User Profiles",
    description:
      "Allow users to create and manage their own profiles with avatars and bios.",
    timestamp: new Date("2024-08-03T09:45:00Z"),
    author: {
      id: "author-4",
      firstName: "Dana",
      lastName: "Lee",
    },
    comments: [
      {
        id: "comment-2",
        suggestionId: "suggestion-3",
        author: {
          id: "author-1",
          firstName: "Alice",
          lastName: "Johnson",
        },
        content:
          "Profiles would be a fantastic addition! It will make user interactions more personalized.",
        timestamp: new Date("2024-08-03T10:15:00Z"),
      },
    ],
  },
  {
    id: "suggestion-4",
    title: "Enable Offline Mode",
    description: "Allow users to access certain features and content offline.",
    timestamp: new Date("2024-08-04T16:00:00Z"),
    author: {
      id: "author-5",
      firstName: "Eve",
      lastName: "Davis",
      title: "Ms.",
    },
    comments: [],
  },
  {
    id: "suggestion-5",
    title: "Integrate Social Media Sharing",
    description: "Add options to share content on social media platforms.",
    timestamp: new Date("2024-08-05T12:20:00Z"),
    author: {
      id: "author-6",
      firstName: "Frank",
      lastName: "Miller",
      title: "Mr.",
    },
    comments: [],
  },
  {
    id: "suggestion-6",
    title: "Add Notification System",
    description:
      "Implement a notification system for important updates and messages.",
    timestamp: new Date("2024-08-06T08:30:00Z"),
    author: {
      id: "author-7",
      firstName: "Grace",
      lastName: "Wilson",
      title: "Dr.",
    },
    comments: [
      {
        id: "comment-3",
        suggestionId: "suggestion-6",
        author: {
          id: "author-8",
          firstName: "Hank",
          lastName: "Taylor",
        },
        content:
          "Notifications are crucial for user engagement. This would be a great feature.",
        timestamp: new Date("2024-08-06T09:00:00Z"),
      },
    ],
  },
  {
    id: "suggestion-7",
    title: "Enhance Mobile Responsiveness",
    description:
      "Improve the mobile responsiveness of the website for better user experience on smartphones and tablets.",
    timestamp: new Date("2024-08-07T11:45:00Z"),
    author: {
      id: "author-2",
      firstName: "Bob",
      lastName: "Smith",
    },
    comments: [],
  },
  {
    id: "suggestion-8",
    title: "Add Multi-language Support",
    description:
      "Provide options to switch between different languages for global users.",
    timestamp: new Date("2024-08-08T13:30:00Z"),
    author: {
      id: "author-3",
      firstName: "Charlie",
      lastName: "Brown",
    },
    comments: [
      {
        id: "comment-4",
        suggestionId: "suggestion-8",
        author: {
          id: "author-9",
          firstName: "Ivy",
          lastName: "Green",
        },
        content: "This would be very helpful for international users!",
        timestamp: new Date("2024-08-08T14:00:00Z"),
      },
    ],
  },
  {
    id: "suggestion-9",
    title: "Improve Accessibility Features",
    description:
      "Enhance accessibility features to support users with disabilities.",
    timestamp: new Date("2024-08-09T15:00:00Z"),
    author: {
      id: "author-4",
      firstName: "Dana",
      lastName: "Lee",
    },
    comments: [],
  },
  {
    id: "suggestion-10",
    title: "Create a Feedback System",
    description:
      "Implement a system for users to provide feedback and rate features.",
    timestamp: new Date("2024-08-10T17:30:00Z"),
    author: {
      id: "author-5",
      firstName: "Eve",
      lastName: "Davis",
    },
    comments: [
      {
        id: "comment-5",
        suggestionId: "suggestion-10",
        author: {
          id: "author-6",
          firstName: "Frank",
          lastName: "Miller",
        },
        content:
          "Feedback systems are great for continuous improvement. Looking forward to this feature.",
        timestamp: new Date("2024-08-10T18:00:00Z"),
      },
    ],
  },
];
