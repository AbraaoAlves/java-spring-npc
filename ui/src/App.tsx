
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
      {index: true, element: <Index/>}
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}

export default App
