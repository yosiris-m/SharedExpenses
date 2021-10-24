import React from "react";
import { Expense } from "../../../services/expenses";
import styles from "./ExpenseDetail.module.scss";
import Moment from "react-moment";
import { formatMoney } from "../../../helpers/formatters";

type ExpenseDetailProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div>{expense.friend}</div>
        <Moment fromNow className={styles.date}>
          {expense.date}
        </Moment>
      </div>

      <div className={styles.row}>
        <span>
          <i className="fas fa-receipt" />
          {expense.description}
        </span>

        <div>{formatMoney(expense.amount)}</div>
      </div>
    </div>
  );
}

export default ExpenseDetail;
