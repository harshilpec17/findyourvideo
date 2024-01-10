import Header from "./Layout/Header";
import Body from "./Layout/Body";
import appStore from "./utils/Redux/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <div className=" mx-0.5">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
