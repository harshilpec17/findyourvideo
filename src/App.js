import Header from "./Layout/Header";
import Body from "./Layout/Body";
import appStore from "./utils/Redux/appStore";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/BodyComponent/MainContainer";
import Watch from "./components/WatchComponent/Watch";

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
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
