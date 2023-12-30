import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const togglemenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>Dev.jefferson</span>
      </Link>
      <nav
        className={`${styles.menuSandwich} ${showMenu ? styles.show : ""}`}
        onClick={togglemenu}
      >
          <Link to="/">Home</Link>
          <Link to="/Sobre">Sobre</Link>
          <Link to="/Projetos">Projetos</Link>
          <Link to="/Contatos">Contatos</Link>
        </nav>
      <div className={styles.menuButton} onClick={togglemenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
    </header>
  );
}

export default Header;
