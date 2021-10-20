import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { getFriends } from "../../services/friends";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>Share Expenses</div>
      </header>
      <main>
        <section>
          <Link to="/add-user">Add User</Link>
          <ul>
            {getFriends().map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </section>

        <section>
          <Link to="/add-expense">Expenses</Link>
        </section>
      </main>
    </>
  );
}

export default Home;
