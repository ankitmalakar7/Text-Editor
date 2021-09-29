import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Text Editor" Home="Home" About="About" />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Text heading="Enter your text below:" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
