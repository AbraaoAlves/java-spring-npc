
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import  Layout  from "./pages/Layout";
import Index from "./pages";
import { UsuarioInfo } from "./pages/UsuarioInfo";
import { UsuarioForm } from "./pages/UsuarioForm";
import {action as destroyAction} from './pages/destroy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    loader: Layout.loader,
    action: Layout.action,
    children:[
      {index: true, element: <Index/>},
      {
        path: "users/:userId",
        element: <UsuarioInfo />,
        loader: UsuarioInfo.loader
      },
      {
        path: "users/:userId/edit",
        element: <UsuarioForm />,
        loader: UsuarioInfo.loader,
        action: UsuarioForm.action
      },
      {
        path: "users/:userId/destroy",
        action: destroyAction,
      },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
