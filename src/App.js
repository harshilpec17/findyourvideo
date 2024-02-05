import Body from "./Layout/Body";
import appStore from "./utils/Redux/appStore";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/BodyComponent/MainContainer";
import SearchResult from "./components/SearchComponent/SearchResult";
import Error from "./Error";
import ContactUs from "./components/ContactUsComponent/ContactUs";
import { Suspense, lazy } from "react";
import ShimmerWatchContainer from "./components/WatchComponent/ShimmerWatchContainer";

function App() {
  const WatchPage = lazy(() => import("./components/WatchComponent/Watch"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: (
            <Suspense fallback={<ShimmerWatchContainer />}>
              <WatchPage />
            </Suspense>
          ),
        },
        {
          path: "results",
          element: <SearchResult />,
        },
        {
          path: "contact",
          element: <ContactUs />,
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
