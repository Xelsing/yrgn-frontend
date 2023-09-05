"use client"
import React, { useState } from 'react';
import styles from './Main.module.scss';
import Image from "next/image";
import { clsx } from "clsx";

const Main = () => {
  const [image, setImage] = useState(true);
  const [anim, setAnim] = useState(true);
  const handleChange = () => {
    setAnim(false)
    setImage(!image);
  }

  return (
    <section className={styles.Main}>
      <div className={styles.Inner}>
        <h1 className={styles.Title}>Main page title</h1>
        <div className={styles.Content}>
          {/*<div className={`${styles.box_1} ${styles.card}`}></div>*/}
          {/*<div className={`${styles.box_2} ${styles.card}`}></div>*/}
          <div className={styles.ImageContainer}>
            <Image
              onClick={handleChange}
              className={clsx({
                [styles["image"]]: true,
                [styles["hide"]]: !image,
              })}
              src={'/1.jpg'}
              width={960}
              height={1280}
              layout={"responsive"}
              alt={''}
            />
            <Image
              onClick={handleChange}
              className={clsx({
                [styles["image"]]: true,
                [styles["hide"]]: image,
              })}
              src={'/2.jpg'}
              width={960}
              height={1280}
              layout={"responsive"}
              alt={''}
            />
          </div>
          {/*<div className={`${styles.box_3} ${styles.card}`}></div>*/}
          {/*<div className={`${styles.box_4} ${styles.card}`}></div>*/}
        </div>
      </div>
        <div className={clsx({
          [styles["ArrowContainer"]]: true,
          [styles["hide"]]: !anim
        })}>
          <p className={styles.ArrowContainer__text}>Кликай на кису</p>
          <div className={styles.ArrowContainer__img}>
            <Image
              src={'/arrow.png'}
              alt={''}
              width={458}
              height={458}
              layout={"responsive"}
            />
          </div>
        </div>
    </section>
  );
};

export default Main;