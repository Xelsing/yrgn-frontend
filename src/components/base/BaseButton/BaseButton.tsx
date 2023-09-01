import React, { ReactNode } from 'react';
import clsx from "clsx";

import styles from './BaseButton.module.scss';

type PropsType = {
  children: ReactNode;
  className?: string;
  fullwidth?: boolean;
}

const BaseButton = ({children, fullwidth, className = ''}: PropsType) => {
  return (
    <button className={clsx({
      [styles["BaseButton"]]: true,
      [styles["BaseButton_full_width"]]: fullwidth,
      [className]: !!className,
    })}>
      {children}
    </button>
  );
};

export default BaseButton;