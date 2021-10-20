import React from "react";
import { Expense } from "../../services/expenses";
import styles from "./ExpenseDetail.module.scss";
import moment from "moment";

type ExpenseDetailProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <i className="fas fa-user-alt" />
        {expense.friend}
      </div>
      <div className={styles.descriptionPay}>
        <div> Add expense: {expense.description}</div>
        <div>{expense.amount} €</div>
      </div>
      <div>Date: {moment(expense.date).format("DD- MM- YYYY ")}</div>
    </div>
  );
}

export default ExpenseDetail;
