import React, { FC, PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <React.Fragment>{children}</React.Fragment>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
