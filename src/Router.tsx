import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Form />,
   },
   {
    path: '/list',
    element: <List />   
   }
]);


export default router;
