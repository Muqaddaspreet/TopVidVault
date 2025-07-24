import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { useState } from "react";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer searchQuery={searchQuery} />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="">
        <Head searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <RouterProvider router={appRouter} />
        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonList
         *    VideoContainer
         *      VideoCard
         *
         * Footer
         */}
      </div>
    </Provider>
  );
}

export default App;
