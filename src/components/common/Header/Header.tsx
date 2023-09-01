import React from 'react';
import styles from './Header.module.scss';
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Header__nav}>
        <Link className={styles.Header__link} href={'/'}>main</Link>
        <Link className={styles.Header__link} href={'/about'}>about</Link>
        <Link className={styles.Header__link} href={'/test'}>Testing</Link>
      </nav>
    </header>
  );
};

export default Header;