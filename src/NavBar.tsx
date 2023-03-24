import * as React from 'react';
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (<nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/solar-system">Solar System</NavLink>
            </li>
        </ul>
    </nav>);
}
