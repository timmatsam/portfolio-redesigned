import { Footer } from "./Footer";
import { ReactNode } from "react";
import { Navbar } from "./Navibar";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});
interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`bg-gradient-to-b from-linear1 to-linear2 lg:from-main lg:to-main w-screen h-screen flex justify-center items-center flex-col ${barlow.variable} font-sans lg:space-y-20 overflow-y-auto`}
    >
      <div className="lg:bg-gradient-to-b from-linear1 to-linear2 w-screen h-screen lg:w-3/5 lg:h-4/5 lg:rounded-xl lg:shadow-2xl shadow-shadow justify-self-start overflow-y-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
/**
 * make
 */
export default Layout;
