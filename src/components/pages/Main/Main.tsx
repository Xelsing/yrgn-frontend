import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.Main}>
      <section className={styles.Inner}>
        <h1 className={styles.Title}>Main page title</h1>
        <div className={styles.Content}>
          <div className={`${styles.box_1} ${styles.card}`}></div>
          <div className={`${styles.box_2} ${styles.card}`}></div>
          <div className={`${styles.box_3} ${styles.card}`}></div>
          <div className={`${styles.box_4} ${styles.card}`}></div>

        </div>
      </section>
    </main>
  );
};

export default Main;