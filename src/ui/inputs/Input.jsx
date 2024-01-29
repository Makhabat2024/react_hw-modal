import React from "react";
import styles from "../inputs/Input.module.css";
const Input = ({ type, placeholder, value, setData }) => {
  return (
    <input
      className={styles.modalInput}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setData(e.target.value);
      }}
    />
  );
};

export default Input;
