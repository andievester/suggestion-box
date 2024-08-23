import { UserSuggestion } from "../types/suggestion.interfaces";
import { generateId } from "../utils/data-format-utils";

export const mockSuggestions: UserSuggestion[] = [
  {
    id: 111222333,
    title: "Add Dark Mode",
    description: "Implement a dark mode option to reduce eye strain.",
    timestamp: new Date("2024-08-01T10:00:00Z"),
    author: {
      id: generateId(),
      firstName: "Me",
    },
    comments: [
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Bob",
          lastName: "Smith",
        },
        content: "This would be great! I've been waiting for a dark mode.",
        timestamp: new Date("2024-08-01T11:00:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Alice",
          lastName: "Johnson",
        },
        content: "Dark mode is a must-have feature nowadays.",
        timestamp: new Date("2024-08-01T11:10:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Me",
        },
        content:
          "I agree! My eyes would really appreciate a dark mode. In fact, I really wanted to implement a dark mode for this project in particular, but I ran out of time, and honestly spent way too much time fiddling with the light color scheme. Typical...",
        timestamp: new Date("2024-08-01T11:15:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "David",
          lastName: "Wilson",
        },
        content: "Hope this gets implemented soon!",
        timestamp: new Date("2024-08-01T11:20:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Eva",
          lastName: "Miller",
        },
        content: "Dark mode is the future!",
        timestamp: new Date("2024-08-01T11:25:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Frank",
          lastName: "Garcia",
        },
        content: "Would love to see this feature.",
        timestamp: new Date("2024-08-01T11:30:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Grace",
          lastName: "Martinez",
        },
        content: "I use dark mode on every app. Please add it here too.",
        timestamp: new Date("2024-08-01T11:35:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Henry",
          lastName: "Robinson",
        },
        content:
          "Yes, please! My eyes are begging for this feature. I've been using the app for months now, and the lack of a dark mode has been a constant strain on my eyes. The ability to switch to a dark theme would not only make the app more visually appealing but also significantly reduce eye strain during extended use. It's such a crucial feature that I believe many users would greatly appreciate, especially those of us who spend a lot of time on the app late into the night.",
        timestamp: new Date("2024-08-01T11:40:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Ivy",
          lastName: "Clark",
        },
        content:
          "Dark mode would be a game changer. I've seen this feature become a standard in many other applications, and for good reason. Not only does it provide a more comfortable viewing experience in low-light conditions, but it also helps in saving battery life on OLED screens. Implementing dark mode would be a fantastic upgrade that would cater to a wider range of users and improve the overall usability of the app. It's a small change that could make a big difference for many of us who prefer to use the app in dimly lit environments.",
        timestamp: new Date("2024-08-01T11:45:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Me",
        },
        content: "Maybe I'll implement it when I get back.",
        timestamp: new Date("2024-08-01T11:50:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Kathy",
          lastName: "Lee",
        },
        content: "Dark mode is essential, especially for night use.",
        timestamp: new Date("2024-08-01T11:55:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Liam",
          lastName: "Walker",
        },
        content: "Would definitely use dark mode if available.",
        timestamp: new Date("2024-08-01T12:00:00Z"),
      },
      {
        id: generateId(),
        suggestionId: 111222333,
        author: {
          id: generateId(),
          firstName: "Mia",
          lastName: "Harris",
        },
        content: "Dark mode is long overdue.",
        timestamp: new Date("2024-08-01T12:05:00Z"),
      },
    ],
  },
  {
    id: 222333444,
    title: "Improve Search Functionality",
    description: "Enhance the search feature to include filtering and sorting.",
    timestamp: new Date("2024-08-02T14:30:00Z"),
    author: {
      id: generateId(),
      firstName: "Charlie",
      lastName: "Brown",
    },
    comments: [],
  },
  {
    id: 333444555,
    title: "Add User Profiles",
    description:
      "Allow users to create and manage their own profiles with avatars and bios.",
    timestamp: new Date("2024-08-03T09:45:00Z"),
    author: {
      id: generateId(),
      firstName: "Dana",
      lastName: "Lee",
    },
    comments: [
      {
        id: generateId(),
        suggestionId: 333444555,
        author: {
          id: generateId(),
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
    id: 444555666,
    title: "Enable Offline Mode",
    description: "Allow users to access certain features and content offline.",
    timestamp: new Date("2024-08-04T16:00:00Z"),
    author: {
      id: generateId(),
      firstName: "Eve",
      lastName: "Davis",
      title: "Ms.",
    },
    comments: [],
  },
  {
    id: 666777888,
    title: "Integrate Social Media Sharing",
    description: "Add options to share content on social media platforms.",
    timestamp: new Date("2024-08-05T12:20:00Z"),
    author: {
      id: generateId(),
      firstName: "Frank",
      lastName: "Miller",
      title: "Mr.",
    },
    comments: [],
  },
  {
    id: 777888999,
    title: "Add Notification System",
    description:
      "Implement a notification system for important updates and messages.",
    timestamp: new Date("2024-08-06T08:30:00Z"),
    author: {
      id: generateId(),
      firstName: "Grace",
      lastName: "Wilson",
      title: "Dr.",
    },
    comments: [
      {
        id: generateId(),
        suggestionId: 777888999,
        author: {
          id: generateId(),
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
    id: 888999000,
    title: "Enhance Mobile Responsiveness",
    description:
      "Improve the mobile responsiveness of the website for better user experience on smartphones and tablets.",
    timestamp: new Date("2024-08-07T11:45:00Z"),
    author: {
      id: generateId(),
      firstName: "Bob",
      lastName: "Smith",
    },
    comments: [],
  },
  {
    id: 666555444,
    title: "Add Multi-language Support",
    description:
      "Provide options to switch between different languages for global users.",
    timestamp: new Date("2024-08-08T13:30:00Z"),
    author: {
      id: generateId(),
      firstName: "Charlie",
      lastName: "Brown",
    },
    comments: [
      {
        id: generateId(),
        suggestionId: 666555444,
        author: {
          id: generateId(),
          firstName: "Ivy",
          lastName: "Green",
        },
        content: "This would be very helpful for international users!",
        timestamp: new Date("2024-08-08T14:00:00Z"),
      },
    ],
  },
  {
    id: 888777666,
    title: "Improve Accessibility Features",
    description:
      "Enhance accessibility features to support users with disabilities.",
    timestamp: new Date("2024-08-09T15:00:00Z"),
    author: {
      id: generateId(),
      firstName: "Dana",
      lastName: "Lee",
    },
    comments: [],
  },
  {
    id: 777666555,
    title: "Create a Feedback System",
    description:
      "Implement a system for users to provide feedback and rate features.",
    timestamp: new Date("2024-08-10T17:30:00Z"),
    author: {
      id: generateId(),
      firstName: "Eve",
      lastName: "Davis",
    },
    comments: [
      {
        id: generateId(),
        suggestionId: 777666555,
        author: {
          id: generateId(),
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
