import React from 'react';
import { Metadata } from "next";

import { About } from "@pages/index";

export const metadata: Metadata = {
  title: 'About YRGN',
}

const AboutPage = () => {
  return (
    <About/>
  );
};

export default AboutPage;