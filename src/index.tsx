import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './error-page';
import { Projects } from './pages/Projects';
import { SolarSystem } from './pages/SolarSystem';
import { LandingPage } from './pages/LandingPage';
import { About } from './pages/About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//each time a new page is added, we connect it to the router
const router = createBrowserRouter([
  {

    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,

      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "solar-system",
        element: <SolarSystem />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
