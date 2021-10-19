import React, { useState } from "react";
import styles from "./AddUser.module.scss";
import { Link, useHistory } from "react-router-dom";
import { createFriend } from "../../services/friends";

type FormElement = React.FormEvent<HTMLFormElement>;

function AddUser() {
  const [name, setName] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    createFriend(name);
    history.push("/home");
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/home">
          <i className="fas fa-arrow-left" />
        </Link>
        <h1>Add User </h1>
      </header>
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          className={styles.label}
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddUser;
