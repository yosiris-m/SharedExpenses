import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { getFriends } from "../../services/friends";
import photo from "../../images/friends.jpg";
import React from "react";
import Expenses from "./components/Expenses";
import Balances from "./components/Balances";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src={photo} className={styles.photo} alt="friends" />
      </header>
      <main className={styles.wrapperMain}>
        <div className={styles.usersContainer}>
          <div className={styles.users}>
            <h2>Users</h2>
            <Link to="/add-user" className={styles.usersLink}>
              Add User
            </Link>
          </div>
          <div className={styles.usersList}>
            {getFriends().map((name, index) => (
              <div key={index}>
                <Link to="/add-expense" className={styles.listName}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <Expenses />
          <Balances />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
