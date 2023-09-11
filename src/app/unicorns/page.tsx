import { Metadata } from "next";
import { Unicorns } from "@pages/index";

export const metadata: Metadata = {
  title: 'Unicorns',
}

const Page = () => {
  return (
    <Unicorns/>
  );
};

export default Page;