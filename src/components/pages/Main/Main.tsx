import React from 'react';
import styles from './Main.module.scss';
import Image from "next/image";

const Main = () => {
  return (
    <section className={styles.Main}>
      <div className={styles.Inner}>
        <h1 className={styles.Title}>Main page title</h1>
        <div className={styles.Content}>
          {/*<div className={`${styles.box_1} ${styles.card}`}></div>*/}
          {/*<div className={`${styles.box_2} ${styles.card}`}></div>*/}
            <Image
              className={styles.image}
              src={'/1.jpg'}
              width={960}
              height={1280}
              // fill={true}
              alt={''}
            />
            <Image
              className={styles.image}
              src={'/2.jpg'}
              width={960}
              height={1280}
              alt={''}
            />
          {/*<div className={`${styles.box_3} ${styles.card}`}></div>*/}
          {/*<div className={`${styles.box_4} ${styles.card}`}></div>*/}
        </div>
      </div>
    </section>
  );
};

export default Main;