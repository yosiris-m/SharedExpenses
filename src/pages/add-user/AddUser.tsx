import React, { useState } from "react";
import styles from "./AddUser.module.scss";
import { Link, useHistory } from "react-router-dom";
import { createFriend } from "../../services/friends";
import Button from "../../components/button/Button";

type FormElement = React.FormEvent<HTMLFormElement>;

function AddUser() {
  const [name, setName] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    createFriend(name);

    history.push("/");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
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
        <Button label="Add" type="submit" />
      </form>
    </div>
  );
}

export default AddUser;
