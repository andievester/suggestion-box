# Suggestion Box

Per the specs I received, Suggestion Box is a React application for managing and viewing user suggestions. It provides functionality to create, view, and comment on suggestions. It also implements functionality to generate random suggestions every 5 minutes.

# Technologies Used

- React: for building the user interface.
- Vite: for fast development and build tooling.
- Bootstrap: for styling and responsive design.
- Typescript: for type safety and better development experience.
- ESLint: for linting and code quality.

# Getting Started

- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the Repository**

```bash
   git clone <repository-url>
   cd vester-suggestion-box
```

2. **Install Dependencies**

```bash
   git clone <repository-url>
   cd vester-suggestion-box
```

### Development

To start the development server, run:

```bash
   npm run dev
```

This will start the Vite development server and open the application in your default web browser. Vite provides fast hot module replacement (HMR) and optimized development experience. The development server will automatically reload the application when you make changes to the code.

# Dependencies

- `@faker-js/faker`: For generating fake data.

- `@hookform/resolvers`, `react-hook-form`, `zod`: I decided to use a combination of these three libraries for the small form for adding new suggestions. It's a bit of overkill for such a small set of inputs, but I wanted to demonstrate the approach I would typicall take for a more complex, real-world form. Zod allows for customizable form error handling, and is integrated into React's form library via the resolvers to create a functional form with validation.

- `react-bootstrap`, `bootstrap`, `bootstrap-icons`: Component library, icons, and styles from bootstrap.

- `react`: Core React library.

- `react-dom`: React DOM rendering.

- `react-router-dom`: For routing. I decided to take an approach that gave each suggestion its own URL, and added these as Outlets to the suggestion Links.

# Potential additions to the project

- If given an API to work with, I would use `axios` for handling HTTP requests (with additional update and delete functionality). Using `async/await` in conjunction with Axios would allow for clean and readable asynchronous code. Instead I opted for leveraging `localStorage` so that data persists across reloads and clicking through suggestions from the list.

- Dark mode toggle.

- User Authentication (e.g., with OAuth or JWT) to allow users to log in, submit suggestions, and comment.

- A search bar to allow users to quickly find suggestions based on title or content.

- Filtering and sorting suggetions based on date, popularity, categories, etc.

- Unit testing using Jest or React Testing Library.

- End-to-end tests using Cypress or Playwright to simulate user interactions and verify that all app functionalities work as expected.

Thanks for viewing my project!
