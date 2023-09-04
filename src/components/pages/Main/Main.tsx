import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <section className={styles.Main}>
      <div className={styles.Inner}>
        <h1 className={styles.Title}>Main page title</h1>
        <div className={styles.Content}>
          <div className={`${styles.box_1} ${styles.card}`}></div>
          <div className={`${styles.box_2} ${styles.card}`}></div>
          <div>Проверка деплоя</div>
          <div>Проверка git pull из репы</div>
          {/*<div className={`${styles.box_3} ${styles.card}`}></div>*/}
          {/*<div className={`${styles.box_4} ${styles.card}`}></div>*/}
        </div>
      </div>
    </section>
  );
};

export default Main;