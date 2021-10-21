import React, { useState } from "react";
import styles from "../add-expense/AddExpense.module.scss";
import { Link, useHistory } from "react-router-dom";
import { createExpenses } from "../../services/expenses";
import moment from "moment";
import { getFriends } from "../../services/friends";

type FormElement = React.FormEvent<HTMLFormElement>;

function AddExpense() {
  const now = moment().format("YYYY-MM-DDTHH:mm");
  const history = useHistory();

  const [friend, setFriend] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState(now);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    const expense = { friend, amount: parseFloat(amount), date, description };
    createExpenses(expense);
    history.push("/home");
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/home">
          <i className="fas fa-arrow-left" />
        </Link>
        <h1>Add Expenses </h1>
      </header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label> Friend</label>
        <select
          onChange={(event) => setFriend(event.target.value)}
          value={friend}
          required
        >
          <option value="">Select a friend</option>
          {getFriends().map((friend, idx) => (
            <option value={friend} key={idx}>
              {friend}
            </option>
          ))}
        </select>
        <label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            placeholder="0.0"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          Amount
        </label>
        <input
          required
          type={"datetime-local"}
          max={now}
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label>
          Description
          <input
            required
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddExpense;
