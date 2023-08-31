import React, { ReactNode } from 'react';
import { Footer, Header } from "@common/index";

type PropsType = {
  children: ReactNode;
}

const Default = ({children}: PropsType) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Default;