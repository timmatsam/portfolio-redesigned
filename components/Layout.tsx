import { Footer } from "./Footer";
import { ReactNode } from "react";
import { Navbar } from "./Navibar";
interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="App">
      <div className="Box">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
