import Question from "../pages/Question/Question";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import LoginLayout from "../layouts/LoginLayout";
import Forum from "../pages/Forum/Forum";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Profile from "../pages/Profile/Profile";
import AskQuestion from "../pages/AskQuestion/AskQuestion";
import EditQuestion from "../pages/AskQuestion/EditQuestion";
import EditAnswer from "../pages/AskQuestion/EditAnswer"



export const QUESTION_ROUTE = "/questions/:id";
export const REGISTER_ROUTE = "/register";
export const ASKQUESTION_ROUTE = "/askquestions";
export const LOGIN_ROUTE = "/";
export const FORUM_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const EDITQUESTION_ROUTE =  "/questions/:id/edit";
export const EDITANSWER_ROUTE = "/answers/:id/edit";
export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: LOGIN_ROUTE,
      Component: Login,
    },
    {
      path: REGISTER_ROUTE,
      Component: Registration,
    },
  ],
};

export const authenticatedRoutes = {
  Layout: AuthenticatedLayout,
  routes: [
    {
      path: FORUM_ROUTE,
      Component: Forum,
    },
    {
      path: ASKQUESTION_ROUTE,
      Component: AskQuestion,
    },
    {
      path:QUESTION_ROUTE,
      Component:Question,
    },
    {
      path: EDITQUESTION_ROUTE,
      Component: EditQuestion,
    },
   {
      path: EDITANSWER_ROUTE,
      Component: EditAnswer,
   },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
  ],
};

export const topbarNavigationItems = [
  { route: FORUM_ROUTE, title: "Forum" },
  { route: ASKQUESTION_ROUTE, title: "Ask questions" },
  

];
