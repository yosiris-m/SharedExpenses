import React from "react";
import { Link } from "react-router-dom";
import { getExpenses, getExpensesTotal } from "../../../services/expenses";
import styles from "./Expenses.module.scss";
import { formatMoney } from "../../../helpers/formatters";
import ExpenseDetail from "./ExpenseDetail";

function Expenses() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Expenses</h2>
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
  );
}

export default Expenses;
