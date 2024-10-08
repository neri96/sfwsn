import { ReactNode } from "react";

import Header from "../layout/header";
import Footer from "../layout/footer";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
