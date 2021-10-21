import React from "react";
import { Expense } from "../../services/expenses";
import styles from "./ExpenseDetail.module.scss";
import Moment from "react-moment";

type ExpenseDetailProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.BoxExpenseDetail}>
        <div>{expense.friend}</div>
        <Moment fromNow>{expense.date}</Moment>{" "}
      </div>

      <div>
        <div className={styles.BoxExpenseDetail}>
          <span>
            <i className="fas fa-shopping-basket" />
            {expense.description}
          </span>

          <div>{expense.amount} €</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetail;
