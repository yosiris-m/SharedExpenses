import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({ label, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
