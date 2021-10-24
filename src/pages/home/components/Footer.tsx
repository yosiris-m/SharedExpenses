import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Made with <i className="fas fa-heart" /> by Yosiris Mariñez
      </div>
      <a href="http://www.freepik.com" className={styles.freepik}>
        Image designed by pikisuperstar / Freepik
      </a>
    </footer>
  );
}

export default Footer;
