
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import  Layout  from "./pages/Layout";
import Index from "./pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Index/>},
      {
        path: "users/:userId",
        // element: <User />,
        // loader: contactLoader
      },
      {
        path: "users/:userId/edit",
        // element: <EditUser />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "users/:userId/destroy",
        // action: destroyAction,
      },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
