import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import Store from "./Utils/Store";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={Store}>
      <div className="h-screen overflow-hidden">
        <Head />
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
