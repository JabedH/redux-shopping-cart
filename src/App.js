import logo from "./logo.svg";
import "./App.css";
import ACounter from "./Components/ACounter";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ACounter />
      </Provider>
    </div>
  );
}

export default App;
