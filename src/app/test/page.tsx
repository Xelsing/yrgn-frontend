import { Metadata } from "next";

import { Testing } from "@pages/index";

export const metadata: Metadata = {
  title: 'Testing',
}

const test = () => {
  return (
    <Testing/>
  );
};

export default test;