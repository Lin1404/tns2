import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Gallery from "./components/modules/Gallery";
import Certifications from "./components/modules/Certifications";
import DRP from "./components/modules/DRP";
import RepairProcess from "./components/homePageComponents/RepairProcess";
import AboutUs from "./components/modules/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "//gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "//certifications",
    element: <Certifications />,
    errorElement: <ErrorPage />,
  },
  {
    path: "//drp",
    element: <DRP />,
    errorElement: <ErrorPage />,
  },
  {
    path: "//repairprocess",
    element: <RepairProcess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "//aboutus",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
