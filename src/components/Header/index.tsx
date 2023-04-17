import styles from "./index.module.scss";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="https://www.adbertech.com/">
        <div className={styles.header__logo}>
          <img src={logo} alt="adbert" />
        </div>
      </Link>
    </div>
  );
}
