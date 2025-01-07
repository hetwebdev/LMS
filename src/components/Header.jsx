import styles from "./Header.module.css";
import { useState, useEffect } from "react";

function Header() {
  const [logoName, setLogoName] = useState("LMS");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setLogoName("LMS");
      } else {
        setLogoName("Library Management System");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.textLogo}>{logoName}</h1>
    </header>
  );
}

export default Header;
