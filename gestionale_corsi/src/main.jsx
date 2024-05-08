import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Course } from "./components/Course/Course"
import { Layout } from "./components/Layouts/MainLayout/Layout"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { AuthContextProvider } from "./context/AuthContext/AuthContextProvider"
import './index.css'
import { Courses } from './pages/Courses/Courses'
import { Home } from './pages/Home/Home'
import { Login } from "./pages/Login/Login"
import { NotFound } from './pages/NotFound/NotFound'
import { Profile } from "./pages/Profile/Profile"
import { Registration } from "./pages/Registration/Registration"
import { UpdateUser } from "./pages/UpdateUser/UpdateUser"
import { Users } from "./pages/Users/Users"
import { DeleteUser } from "./pages/DeleteUser/DeleteUser"
import { AddCorso } from "./pages/AddCorso/AddCorso"



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
        path: "courses/:id",
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
      {
        path: "addcourse/",
        element: <ProtectedRoute><AddCorso /></ProtectedRoute>
      },
      {
        path: "users",
        // element: <ProtectedRoute><Users /></ProtectedRoute>,
        children: [
          {
            path: "",
            element: <ProtectedRoute><Users /></ProtectedRoute>
          },
          {
            path: "update/:email",
            element: <ProtectedRoute>< UpdateUser /></ProtectedRoute>
          },
          {
            path: "delete/:email",
            element: <ProtectedRoute>< DeleteUser /></ProtectedRoute>
          }
        ]

      },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>

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
