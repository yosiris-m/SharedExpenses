import React from "react";
import styles from "./Balances.module.scss";
import { getExpensesByUser } from "../../../services/expenses";
import { formatMoney } from "../../../helpers/formatters";

function Balances() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Balances</h2>

      {getExpensesByUser().map((expensesByUser, idx) => (
        <div key={idx} className={styles.list}>
          <div>{expensesByUser.friend}</div>
          <div>{formatMoney(expensesByUser.amount)}</div>
        </div>
      ))}
    </section>
  );
}

export default Balances;
