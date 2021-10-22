import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AddUser from "./pages/add-user/AddUser";
import AddExpense from "./pages/add-expense/AddExpense";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/add-expense" component={AddExpense} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
