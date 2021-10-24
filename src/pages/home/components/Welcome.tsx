import React from "react";
import styles from "./Welcome.module.scss";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome to SharedExpenses!</h1>
      <p className={styles.message}>
        In order to create expenses you need to add people first.
      </p>
      <Link to="/add-user" className={styles.addPeopleLink}>
        <i className="fas fa-users" /> Add people
      </Link>
    </div>
  );
}

export default Welcome;
