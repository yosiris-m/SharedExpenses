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
      <div className={styles.BoxExpenseDetail}>
        <div>{expense.friend}</div>
        <Moment fromNow className={styles.date}>
          {expense.date}
        </Moment>
      </div>

      <div>
        <div className={styles.BoxExpenseDetail}>
          <span>
            <i className="fas fa-shopping-basket" />
            {expense.description}
          </span>

          <div>{formatMoney(expense.amount)}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetail;
