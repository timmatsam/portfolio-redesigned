import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ReactNode } from 'react';

interface LayoutProps {
   children?: ReactNode;
}


const Layout = ({children}: LayoutProps) => {
    return ( <div className="App">
        <div className="Box">
            <Navbar />
        {children}
        </div>
        <Footer />
    </div> );
}
 
export default Layout;