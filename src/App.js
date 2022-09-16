import logo from "./logo.svg";
import "./App.css";
import ACounter from "./Components/ACounter";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Navbar from "./Components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <ACounter />
      </Provider>
    </div>
  );
}

export default App;
