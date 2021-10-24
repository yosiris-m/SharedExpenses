import styles from "./Home.module.scss";
import photo from "../../images/friends.jpg";
import React from "react";
import Expenses from "./components/Expenses";
import Balances from "./components/Balances";
import Footer from "./components/Footer";
import Users from "./components/Users";
import { getFriends } from "../../services/friends";
import Welcome from "./components/Welcome";

function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={photo} className={styles.photo} alt="friends" />
      </header>
      <main className={styles.wrapperMain}>
        {getFriends().length === 0 ? (
          <Welcome />
        ) : (
          <>
            <Users />
            <Expenses />
            <Balances />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
