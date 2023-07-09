// import Question from "../pages/Question/Question";y

// import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
// import LoginLayout from "../layouts/LoginLayout";
// import Main from "../pages/Main/Main";

// // import Contacts from "../pages/Contacts/Contacts";
// import Login from "../pages/Login/Login";
// import Registration from "../pages/Registration/Registration";
// // import Register from "../pages/Register/Register";
// import Profile from "../pages/Profile/Profile";
// import AskQuestion from "../pages/AskQuestion/AskQuestion";
// // import Projects from "../pages/Projects/Projects";
// // import NewProject from "../pages/NewProject/NewProject";
// // import Project from "../pages/Project/Project";
// // import EditProject from "../pages/EditProject/EditProject";
// export const QUESTION_ROUTE = `${QUESTION_ROUTE}/:id`;
// export const REGISTER_ROUTE = "/register";
// export const ASKQUESTION_ROUTE="/askquestions"
// export const LOGIN_ROUTE = "/";
// export const MAIN_ROUTE = "/";
// // export const CONTACTS_ROUTE = "/contacts";
// export const PROFILE_ROUTE = "/profile";
// // export const PROJECTS_ROUTE = "/projects";
// // export const NEW_PROJECT_ROUTE = `${PROJECTS_ROUTE}/new`;
// // export const PROJECT_ROUTE = `${PROJECTS_ROUTE}/:id`;
// // export const EDIT_PROJECT_ROUTE = `${PROJECT_ROUTE}/edit`;

// // kol neesu prisijnugęs
// export const loginRoutes = {
//   Layout: LoginLayout,
//   routes: [
//     {
//       path: LOGIN_ROUTE,
//       Component: Login,
//     },
//     {
//       path: REGISTER_ROUTE,
//       Component: Registration,
//     },
//   ],
// };

// // kai esu prisijungęs
// export const authenticatedRoutes = {
//   Layout: AuthenticatedLayout,
//   routes: [
//     {
//       path: MAIN_ROUTE,
//       Component: Main,
//     },
//     {
//       path: ASKQUESTION_ROUTE,
//       Component: AskQuestion,
//     },
//     {
//       path: PROFILE_ROUTE,
//       Component: Profile,
//     },
//     {
//       path: QUESTION_ROUTE,
//       Component: Question,
//     },
//     // {
//     //   path: NEW_PROJECT_ROUTE,
//     //   Component: NewProject,
//     // },
//     // {
//     //   path: PROJECT_ROUTE,
//     //   Component: Project,
//     // },
//     // {
//     //   path: EDIT_PROJECT_ROUTE,
//     //   Component: EditProject,
//     // },
//   ],
// };

// export const topbarNavigationItems = [
//   { route: MAIN_ROUTE, title: "Forum" },
//     { route: ASKQUESTION_ROUTE, title: "Ask questions" },
//   //   { route: CONTACTS_ROUTE, title: "Contacts" },
// ];


import Question from "../pages/Question/Question";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import LoginLayout from "../layouts/LoginLayout";
import Forum from "../pages/Forum/Forum";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Profile from "../pages/Profile/Profile";
import AskQuestion from "../pages/AskQuestion/AskQuestion";
import EditQuestion from "../pages/AskQuestion/EditQuestion";
import AddAnswears from "../pages/Answears/AddAnswears";

export const QUESTION_ROUTE = "/questions/:id";
export const REGISTER_ROUTE = "/register";
export const ASKQUESTION_ROUTE = "/askquestions";
export const LOGIN_ROUTE = "/";
export const FORUM_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const EDITQUESTION_ROUTE =  "/questions/:id/edit";
export const ADD_ANSWEARS_ROUTE ='/questions/:id/answers';
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
      path:ADD_ANSWEARS_ROUTE,
      Component:AddAnswears,
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
