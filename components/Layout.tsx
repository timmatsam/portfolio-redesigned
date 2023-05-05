import { NavBar } from "./NavBar";
import { ReactNode } from 'react';

interface LayoutProps {
   children?: ReactNode;
}


const Layout = ({children}: LayoutProps) => {
    return ( <div className="App">
        <div className="Box">
            <NavBar />
        {children}
        </div>
    </div> );
}
 
export default Layout;