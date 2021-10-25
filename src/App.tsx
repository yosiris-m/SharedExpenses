import Home from "./pages/home/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./pages/add-user/AddUser";
import AddExpense from "./pages/add-expense/AddExpense";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-user" component={AddUser} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
    </Router>
  );
}

export default App;
