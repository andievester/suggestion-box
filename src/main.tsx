import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Suggestion from "./components/Suggestion/Suggestion.tsx";
import { suggestionService } from "./services/suggestion.service.ts";
import localStorageService from "./services/local-storage.service.ts";

localStorageService.initialize();

const firstSuggestion = suggestionService.getFirstSuggestion();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            firstSuggestion ? (
              <Navigate to={`/${firstSuggestion.title}`} />
            ) : (
              <Navigate to="/fallback" />
            )
          }
        />
        <Route path=":suggestionTitle" element={<Suggestion />} />
        <Route
          path="/fallback"
          element={<div>No suggestions available.</div>}
        />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
