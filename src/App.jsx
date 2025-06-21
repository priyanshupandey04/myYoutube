import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import Store from "./Utils/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="h-screen overflow-hidden">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
