import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorBoundary.jsx';
import Home from './routes/Home.jsx';
import Movie from './routes/movie.jsx';
import Signup from './routes/Signup.jsx';
import "./index.css"
import MoviesList from './components/MoviesList.jsx';
import { loader as rootLoader } from './components/MoviesList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [

      {
        path: "/",
        element: <MoviesList />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
