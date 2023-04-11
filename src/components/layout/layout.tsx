import { FCC } from "src/types/react";

import { Header } from "../headers";
import { Footer } from "../footers";

const Layout: FCC = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
