import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import BeforeAndAfter from "./components/modules/BeforeAndAfter";
import Team from "./components/modules/Team";
import Certifications from "./components/modules/Certifications";
import DRP from "./components/modules/DRP";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/beforeandafter",
    element: <BeforeAndAfter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Team />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/certifications",
    element: <Certifications />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drp",
    element: <DRP />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
