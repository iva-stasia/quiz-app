import { createBrowserRouter } from "react-router-dom";
import Quiz from "../pages/quiz/Quiz";
import App from "../App";
import Email from "../pages/email/Email";
import ThankYou from "../pages/thank-you/ThankYou";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "quiz/:question",
        element: <Quiz />,
      },
      {
        path: "/email",
        element: <Email />,
        errorElement: "",
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
        errorElement: "",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
