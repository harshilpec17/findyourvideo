import Header from "./Layout/Header";
import Body from "./Layout/Body";
import appStore from "./utils/Redux/appStore";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/BodyComponent/MainContainer";
import Watch from "./components/WatchComponent/Watch";
import SearchResult from "./components/SearchComponent/SearchResult";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
        {
          path: "results",
          element: <SearchResult />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
