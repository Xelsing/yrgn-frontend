import React from 'react';
import styles from './Testing.module.scss';
import { Button, Input } from "@base/index";

const Testing = () => {
  return (
    <section className={styles.Testing}>
      <div className={styles.Inner}>
        <div className={styles.box}>
          <Input
            className={styles.InputTesting}
            placeholder={"Введите свой e-mail"}
          />
          <Button
            className={styles.ButtonTesting}
            fullwidth={true}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testing;