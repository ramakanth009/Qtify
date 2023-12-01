import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default navbar;
