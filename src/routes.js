import { Route, Routes } from "react-router";
import FullScreenNav from "./components/sideBar";
import AgencyPage from "./pages/about/agency";
import PersonalPage from "./pages/about/personal";
import ContactPage from "./pages/contact";
import FashionPage1 from "./pages/fashion/fashion-1";
import FashionPage2 from "./pages/fashion/fashion-2";
import DemoPage from "./pages/home";
import LifeStylePage1 from "./pages/lifestyle/lifestyle-1";
import LifeStylePage2 from "./pages/lifestyle/lifestyle-2";
import TravelPage1 from "./pages/travel/travel-1";
import TravelPage2 from "./pages/travel/travel-2";
import "./styles/general.scss"
import "./styles/page.scss"


function App() {

  const routes = [
    {
      path: "/",
      element: <DemoPage />
    },
    {
      path: "/home",
      element: <DemoPage />
    },
    {
      path: "/travel-1",
      element: <TravelPage1 />
    },
    {
      path: "/travel-2",
      element: <TravelPage2 />
    },
    {
      path: "/fashion-1",
      element: <FashionPage1 />
    },
    {
      path: "/fashion-2",
      element: <FashionPage2 />
    },
    {
      path: "/lifestyle-1",
      element: <LifeStylePage1 />
    },
    {
      path: "/lifestyle-2",
      element: <LifeStylePage2 />
    },
    {
      path: "/agency",
      element: <AgencyPage />
    },
    {
      path: "/personal",
      element: <PersonalPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    },
  ]
  return (
    <div className="w-100">
      <FullScreenNav />
      <Routes>
        {
          routes.map(({path, element})=> (
            <Route key={path} path={path} element={element} />
          ))
        }
        <Route
          path="*"
          element={
            <div className="text-center pt-100p">
              <p className="fs-1 fw-bold">There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
