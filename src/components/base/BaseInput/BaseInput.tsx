import React from 'react';
import clsx from "clsx";

import styles from './BaseInput.module.scss';

type PropsType = {
  placeholder?: string;
  className?: string;
}

const BaseInput = ({placeholder, className = ''}: PropsType) => {
  return (
    <input className={clsx({
      [styles["BaseInput"]]: true,
      [className]: !!className,
    })}
           placeholder={placeholder}
           type="text"
    />
  );
};

export default BaseInput;