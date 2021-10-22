import React, { useState } from "react";
import styles from "./AddUser.module.scss";
import { Link, useHistory } from "react-router-dom";
import { createFriend } from "../../services/friends";
import { Expense } from "../../services/expenses";

type FormElement = React.FormEvent<HTMLFormElement>;

type ExpenseName = {
  expense: Expense;
};

function AddUser() {
  const [name, setName] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    createFriend(name);

    history.push("/home");
  };

  return (
    <div className={styles.box}>
      <header className={styles.header}>
        <Link to="/home">
          <i className="fas fa-arrow-left" />
        </Link>
        <h1>Add User </h1>
      </header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <i className="fas fa-user" />
        <input
          className={styles.inputName}
          placeholder="Name"
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoFocus
        />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddUser;
