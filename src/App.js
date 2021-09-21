import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";

function App() {
  return (
    <>
  <Navbar title="Text Editor" Home="Home" About="About"/>
  <div className="container my-3">
  <Text heading="Enter your text below:"/>
  </div>
  </>
);
}
export default App;
