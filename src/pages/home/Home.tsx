import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { getFriends } from "../../services/friends";
import { getExpenses, getExpensesByUser } from "../../services/expenses";
import ExpenseDetail from "./ExpenseDetail";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>Share Expenses</div>
      </header>
      <main className={styles.wrapperMain}>
        <section>
          <h2>Friends</h2>
          <Link to="/add-user">Add User</Link>
          <ul>
            {getFriends().map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Expenses</h2>
          <Link to="/add-expense">Add expense</Link>
        </section>
        <section>
          {getExpenses().map((expense, idx) => (
            <ExpenseDetail key={idx} expense={expense} />
          ))}
        </section>
        <section>
          <h2>Balance</h2>
          {getExpensesByUser().map((expensesByUser, idx) => (
            <div key={idx}>
              {expensesByUser.friend} {expensesByUser.amount}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
