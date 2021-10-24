import React from "react";
import styles from "./Users.module.scss";
import { Link } from "react-router-dom";
import { getFriends } from "../../../services/friends";

function Users() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Users</h2>
        <Link to="/add-user" className={styles.addUsersLink}>
          Add User
        </Link>
      </div>
      <div className={styles.list}>
        {getFriends().map((name, index) => (
          <div key={index}>
            <Link to="/add-expense" className={styles.listName}>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;
