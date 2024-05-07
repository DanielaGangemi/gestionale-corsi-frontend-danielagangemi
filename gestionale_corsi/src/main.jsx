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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    element: <Layout />,
    path: "/home",
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "courses/",
        children: [
          {
            path: "",
            element: <Courses />
          },
          {
            path: "course/:id",
            element: <Course />
          },
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
