import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.Main}>
      <section className={styles.Inner}>
        <div>
          <h1>Main page title</h1>
        </div>
      </section>
    </main>
  );
};

export default Main;