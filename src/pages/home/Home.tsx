import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { getFriends } from "../../services/friends";
import {
  getExpenses,
  getExpensesByUser,
  getExpensesTotal,
} from "../../services/expenses";
import ExpenseDetail from "./components/ExpenseDetail";
import photo from "../../images/friends.jpg";
import React from "react";
import { formatMoney } from "../../helpers/formatters";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src={photo} className={styles.photo} alt="friends" />
      </header>
      <main className={styles.wrapperMain}>
        <div className={styles.usersContainer}>
          <div className={styles.users}>
            <h2>Users</h2>
            <Link to="/add-user" className={styles.usersLink}>
              Add User
            </Link>
          </div>
          <div className={styles.usersList}>
            {getFriends().map((name, index) => (
              <div key={index}>
                <Link to="/add-expense" className={styles.listName}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <section>
            <div className={styles.usersExpense}>
              <h2>Expenses</h2>
              <Link to="/add-expense" className={styles.expenseLink}>
                Add expense
              </Link>
            </div>
            {getExpenses().map((expense, idx) => (
              <ExpenseDetail key={idx} expense={expense} />
            ))}
            <div className={styles.totalExpenses}>
              <span>Total: </span>
              <strong>{formatMoney(getExpensesTotal())}</strong>
            </div>
          </section>
          <section className={styles.balance}>
            <h2 className={styles.balanceTitle}>Balance</h2>

            {getExpensesByUser().map((expensesByUser, idx) => (
              <div key={idx} className={styles.boxBalance}>
                <div>{expensesByUser.friend}</div>
                <div>{formatMoney(expensesByUser.amount)}</div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          Made with <i className="fas fa-heart" /> by Yosiris Mariñez
        </div>
        <a href="http://www.freepik.com" className={styles.freepik}>
          Image designed by pikisuperstar / Freepik
        </a>
      </footer>
    </>
  );
}

export default Home;
