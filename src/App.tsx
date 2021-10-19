import "./App.css";

import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
