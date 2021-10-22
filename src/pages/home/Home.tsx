import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { getFriends } from "../../services/friends";
import { getExpenses, getExpensesByUser } from "../../services/expenses";
import ExpenseDetail from "./ExpenseDetail";
import photo from "../../images/photo.jpg";
import React from "react";

function Home() {
  return (
    <>
      <header className={styles.header}>
        {/*   <h1 className={styles.title}>Share Expenses</h1>*/}
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
          <section className={styles.usersExpense}>
            <h2>Expenses</h2>
            <Link to="/add-expense" className={styles.expenseLink}>
              Add expense
            </Link>
          </section>
          {getExpenses().map((expense, idx) => (
            <ExpenseDetail key={idx} expense={expense} />
          ))}
          <section className={styles.balance}>
            <h2 className={styles.balanceTitle}>Balance</h2>
            {getExpensesByUser().map((expensesByUser, idx) => (
              <div key={idx} className={styles.boxBalance}>
                <div>{expensesByUser.friend} </div>
                <div> {expensesByUser.amount} €</div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
