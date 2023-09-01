import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Footer__text}>Created by &copy;YRGN</p>
    </footer>
  );
};

export default Footer;