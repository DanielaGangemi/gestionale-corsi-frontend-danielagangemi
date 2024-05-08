import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Courses } from './pages/Courses/Courses';
import { NotFound } from './pages/NotFound/NotFound';
import { Layout } from "./components/Layouts/MainLayout/Layout";
import { Course } from "./components/Course/Course";
import { Login } from "./pages/Login/Login"
import { Registration } from "./pages/Registration/Registration"
import { AuthContextProvider } from "./context/AuthContext/AuthContextProvider"
import { ProtectedRoute } from "./components/ProtectedRoute"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    element: <AuthContextProvider><Layout /></AuthContextProvider>,
    path: "/home",
    children: [
      {
        path: "",
        element: <ProtectedRoute><Home /></ProtectedRoute>
      },
      {
        path: "courses/",
        children: [
          {
            path: "",
            element: <ProtectedRoute><Courses /></ProtectedRoute>
          },
          {
            path: "course/:id",
            element: <ProtectedRoute><Course /></ProtectedRoute>
          }
        ]
      },
    ]

  },

  {
    path: "*", // Definisci il percorso di default per la pagina non trovata
    element: <NotFound />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />


)
