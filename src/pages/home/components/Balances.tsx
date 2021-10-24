import React from "react";
import styles from "./Balances.module.scss";
import { getExpensesByUser } from "../../../services/expenses";
import { formatMoney } from "../../../helpers/formatters";

function Balances() {
  return (
    <section className={styles.balance}>
      <h2 className={styles.balanceTitle}>Balance</h2>

      {getExpensesByUser().map((expensesByUser, idx) => (
        <div key={idx} className={styles.boxBalance}>
          <div>{expensesByUser.friend}</div>
          <div>{formatMoney(expensesByUser.amount)}</div>
        </div>
      ))}
    </section>
  );
}

export default Balances;
